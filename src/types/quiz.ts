export type QuizLevel = 'beginner' | 'intermediate' | 'advanced';

export type QuizCategory =
  | 'all'
  | 'science'
  | 'technology'
  | 'history'
  | 'geography'
  | 'literature'
  | 'mathematics'
  | 'general';

export interface CategoryInfo {
  id: QuizCategory;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  category: QuizCategory;
  level: QuizLevel;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type TimerMode = 'per-question' | 'total' | 'none';

export interface QuizSettings {
  level: QuizLevel;
  category: QuizCategory;
  questionCount: number;
  timerMode: TimerMode;
  timerSeconds: number; // e.g., 30s per question or 300s total
  instantFeedback: boolean;
  soundEnabled: boolean;
}

export interface ActiveQuestion extends Question {
  shuffledOptions: string[];
  correctOptionIndex: number;
}

export interface QuizAttempt {
  id: string;
  timestamp: number;
  settings: QuizSettings;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
}
