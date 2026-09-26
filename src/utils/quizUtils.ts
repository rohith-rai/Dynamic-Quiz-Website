import { ActiveQuestion, Question, QuizAttempt, QuizSettings } from '../types/quiz';
import { QUESTION_BANK } from '../data/questions';

/**
 * Fisher-Yates array shuffling
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Prepares a fresh set of questions based on user settings,
 * prioritizing unseen questions and shuffling options.
 */
export function prepareQuizQuestions(
  settings: QuizSettings,
  previouslySeenIds: Set<string>
): ActiveQuestion[] {
  // 1. Filter bank by category
  let candidatePool = QUESTION_BANK.filter((q) => {
    const matchesCategory = settings.category === 'all' || q.category === settings.category;
    const matchesLevel = q.level === settings.level;
    return matchesCategory && matchesLevel;
  });

  // If candidate pool is too small for requested count, broaden level restriction
  if (candidatePool.length < settings.questionCount) {
    const broaderPool = QUESTION_BANK.filter(
      (q) => settings.category === 'all' || q.category === settings.category
    );
    candidatePool = broaderPool.length >= settings.questionCount ? broaderPool : QUESTION_BANK;
  }

  // 2. Separate into unseen and already seen questions
  const unseen = candidatePool.filter((q) => !previouslySeenIds.has(q.id));
  const seen = candidatePool.filter((q) => previouslySeenIds.has(q.id));

  // Shuffle both sets
  const shuffledUnseen = shuffleArray(unseen);
  const shuffledSeen = shuffleArray(seen);

  // Take from unseen first, then fill from seen if needed
  const selectedRaw: Question[] = [];
  for (const q of shuffledUnseen) {
    if (selectedRaw.length < settings.questionCount) {
      selectedRaw.push(q);
    }
  }
  for (const q of shuffledSeen) {
    if (selectedRaw.length < settings.questionCount) {
      selectedRaw.push(q);
    }
  }

  // If still not enough (e.g. user selected 20 questions in a specific narrow category),
  // backfill from the rest of the question bank
  if (selectedRaw.length < settings.questionCount) {
    const rest = shuffleArray(
      QUESTION_BANK.filter((q) => !selectedRaw.some((s) => s.id === q.id))
    );
    for (const q of rest) {
      if (selectedRaw.length < settings.questionCount) {
        selectedRaw.push(q);
      }
    }
  }

  // 3. Shuffle options for each question and determine new correctOptionIndex
  return selectedRaw.map((q) => {
    const shuffledOptions = shuffleArray(q.options);
    const correctOptionIndex = shuffledOptions.indexOf(q.correctAnswer);
    return {
      ...q,
      shuffledOptions,
      correctOptionIndex,
    };
  });
}

/**
 * Computes quiz results according to the 85% passing rule.
 */
export function calculateQuizResults(
  questions: ActiveQuestion[],
  answers: Record<number, number>,
  timeSpentSeconds: number,
  settings: QuizSettings
): QuizAttempt {
  let score = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] !== undefined && answers[idx] === q.correctOptionIndex) {
      score += 1;
    }
  });

  const total = questions.length;
  // Calculate percentage to 1 decimal place
  const percentage = total > 0 ? Math.round((score / total) * 1000) / 10 : 0;
  // 85% requirement strictly enforced
  const passed = percentage >= 85.0;

  const attempt: QuizAttempt = {
    id: `attempt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    settings,
    score,
    total,
    percentage,
    passed,
    timeSpentSeconds,
  };

  return attempt;
}

/**
 * Local storage management for attempts history
 */
const STORAGE_KEY = 'criterion_quiz_attempts_v1';

export function loadQuizHistory(): QuizAttempt[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as QuizAttempt[];
  } catch {
    return [];
  }
}

export function saveQuizAttempt(attempt: QuizAttempt): void {
  try {
    const current = loadQuizHistory();
    const updated = [attempt, ...current].slice(0, 50); // keep last 50
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore storage quota errors
  }
}

/**
 * Minimalist Web Audio tone synthesis (subtle tactile feedback, no jarring sounds)
 */
class SoundEffects {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playSelect() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio not permitted or failed
    }
  }

  playSubmit() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Audio not permitted
    }
  }

  playFinish(passed: boolean) {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      if (passed) {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(554.37, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.22);
      } else {
        osc.frequency.setValueAtTime(380, now);
        osc.frequency.exponentialRampToValueAtTime(310, now + 0.14);
        osc.frequency.exponentialRampToValueAtTime(260, now + 0.28);
      }
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.3);
    } catch {
      // Audio not permitted
    }
  }
}

export const sounds = new SoundEffects();

/**
 * Format seconds into mm:ss or ss
 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  if (m === 0) {
    return `${s}s`;
  }
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
