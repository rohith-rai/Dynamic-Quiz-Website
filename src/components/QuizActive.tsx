import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ActiveQuestion, QuizSettings } from '../types/quiz';
import { Clock, Bookmark, ArrowRight, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { formatTime, sounds } from '../utils/quizUtils';

interface QuizActiveProps {
  questions: ActiveQuestion[];
  settings: QuizSettings;
  onFinishQuiz: (answers: Record<number, number>, timeSpentSeconds: number) => void;
  onAbortQuiz: () => void;
}

export const QuizActive: React.FC<QuizActiveProps> = ({
  questions,
  settings,
  onFinishQuiz,
  onAbortQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [revealedInInstantMode, setRevealedInInstantMode] = useState<Record<number, boolean>>({});

  // Timer states
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState(0);
  const [questionTimer, setQuestionTimer] = useState<number>(settings.timerSeconds);
  const [totalTimerRemaining, setTotalTimerRemaining] = useState<number>(settings.timerSeconds);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const hasAnsweredCurrent = userAnswers[currentIndex] !== undefined;

  // Refs to avoid stale closures in setInterval
  const answersRef = useRef(userAnswers);
  answersRef.current = userAnswers;

  const totalElapsedRef = useRef(totalSecondsElapsed);
  totalElapsedRef.current = totalSecondsElapsed;

  // Finish quiz handler
  const handleFinish = useCallback(() => {
    if (settings.soundEnabled) {
      sounds.playSubmit();
    }
    onFinishQuiz(answersRef.current, totalElapsedRef.current);
  }, [onFinishQuiz, settings.soundEnabled]);

  // Navigate to next question or submit
  const handleNext = useCallback(() => {
    if (isLastQuestion) {
      handleFinish();
    } else {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (settings.timerMode === 'per-question') {
          setQuestionTimer(settings.timerSeconds);
        }
        return next;
      });
    }
  }, [isLastQuestion, handleFinish, settings.timerMode, settings.timerSeconds]);

  // Navigate to previous question
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      if (settings.timerMode === 'per-question') {
        setQuestionTimer(settings.timerSeconds);
      }
    }
  }, [currentIndex, settings.timerMode, settings.timerSeconds]);

  // Select an option
  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (settings.instantFeedback && revealedInInstantMode[currentIndex]) {
        // In instant feedback mode, don't allow changing after revealed
        return;
      }

      if (settings.soundEnabled) {
        sounds.playSelect();
      }

      setUserAnswers((prev) => ({
        ...prev,
        [currentIndex]: optionIndex,
      }));

      if (settings.instantFeedback) {
        setRevealedInInstantMode((prev) => ({
          ...prev,
          [currentIndex]: true,
        }));
      }
    },
    [currentIndex, settings.instantFeedback, settings.soundEnabled, revealedInInstantMode]
  );

  // Toggle flag
  const toggleFlag = (idx: number) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Timer Tick
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTotalSecondsElapsed((prev) => prev + 1);

      if (settings.timerMode === 'per-question') {
        setQuestionTimer((prev) => {
          if (prev <= 1) {
            // Per question timer expired: advance to next question
            handleNext();
            return settings.timerSeconds;
          }
          return prev - 1;
        });
      } else if (settings.timerMode === 'total') {
        setTotalTimerRemaining((prev) => {
          if (prev <= 1) {
            // Total timer expired: auto-finish quiz
            clearInterval(timerInterval);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [settings.timerMode, settings.timerSeconds, handleNext, handleFinish]);

  // Keyboard navigation & selection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if focus is in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();
      if (['1', 'a'].includes(key) && currentQ.shuffledOptions.length > 0) {
        handleSelectOption(0);
      } else if (['2', 'b'].includes(key) && currentQ.shuffledOptions.length > 1) {
        handleSelectOption(1);
      } else if (['3', 'c'].includes(key) && currentQ.shuffledOptions.length > 2) {
        handleSelectOption(2);
      } else if (['4', 'd'].includes(key) && currentQ.shuffledOptions.length > 3) {
        handleSelectOption(3);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (key === 'f') {
        toggleFlag(currentIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, currentIndex, handleSelectOption, handleNext, handlePrevious]);

  // Calculate progress
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Time warning condition
  const isTimeCritical =
    settings.timerMode === 'per-question'
      ? questionTimer <= 5
      : settings.timerMode === 'total'
      ? totalTimerRemaining <= 30
      : false;

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      {/* Top Header & Breadcrumb Bar */}
      <div className="quiz-card rounded-2xl p-5 sm:p-6 mb-6">
        {/* Progress Bar & Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900 text-sm">
              Question {currentIndex + 1}
            </span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500">{totalQuestions}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] text-zinc-400">Target: ≥85% Pass</span>
            <div className="text-xs font-mono font-medium text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
              {progressPercent}% Complete
            </div>
          </div>
        </div>

        {/* Sleek Progress Track */}
        <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden p-0.5 border border-zinc-200/80 mb-5">
          <div
            className="bg-zinc-900 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Status Row: Category, Difficulty & Timer Control */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 font-medium capitalize border border-zinc-200/60">
              {currentQ.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-50 text-zinc-600 capitalize border border-zinc-200/60 text-[11px]">
              {currentQ.level}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => toggleFlag(currentIndex)}
              className={`text-xs flex items-center gap-1.5 py-1.5 px-3 rounded-lg border transition-all ${
                flagged.has(currentIndex)
                  ? 'bg-zinc-900 text-white border-zinc-900'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${flagged.has(currentIndex) ? 'fill-current' : ''}`} />
              <span>{flagged.has(currentIndex) ? 'Flagged' : 'Flag'}</span>
              <kbd className="hidden sm:inline-block ml-1 text-[10px] opacity-60 font-mono">F</kbd>
            </button>

            {settings.timerMode !== 'none' && (
              <div
                className={`flex items-center gap-1.5 text-xs font-mono tabular-nums px-3 py-1.5 rounded-lg border transition-all ${
                  isTimeCritical
                    ? 'bg-zinc-900 text-white border-zinc-900 font-bold animate-timer-alert'
                    : 'bg-zinc-50 text-zinc-800 border-zinc-200 font-medium'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {settings.timerMode === 'per-question'
                    ? `${questionTimer}s`
                    : formatTime(totalTimerRemaining)}
                </span>
                {isTimeCritical && (
                  <span className="text-[10px] opacity-80 uppercase tracking-wider font-sans">
                    Hurry
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="quiz-card rounded-2xl p-6 sm:p-8 mb-6">
        <div className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400 mb-2">
          Question Prompt
        </div>
        <h2 className="text-lg sm:text-xl font-medium text-zinc-900 leading-relaxed mb-8">
          {currentQ.question}
        </h2>

        {/* 4 Options Grid */}
        <div className="space-y-3">
          {currentQ.shuffledOptions.map((option, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            const isSelected = userAnswers[currentIndex] === optIdx;
            const isRevealed = settings.instantFeedback && revealedInInstantMode[currentIndex];
            const isCorrect = optIdx === currentQ.correctOptionIndex;

            let optionClass = 'quiz-option text-zinc-800';

            if (isRevealed) {
              if (isCorrect) {
                optionClass += ' quiz-option-correct font-medium';
              } else if (isSelected && !isCorrect) {
                optionClass += ' quiz-option-incorrect line-through';
              } else {
                optionClass += ' opacity-50 border-zinc-200';
              }
            } else if (isSelected) {
              optionClass += ' quiz-option-selected font-medium';
            }

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full p-4 text-left flex items-start gap-3.5 cursor-pointer ${optionClass}`}
              >
                <span
                  className={`w-7 h-7 shrink-0 rounded-md flex items-center justify-center text-xs font-mono font-medium border transition-colors ${
                    isSelected || (isRevealed && isCorrect)
                      ? 'border-zinc-700 bg-zinc-800 text-white shadow-xs'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                  }`}
                >
                  {letter}
                </span>
                <span className="text-sm sm:text-base leading-snug flex-1 pt-0.5">
                  {option}
                </span>
                {isRevealed && isCorrect && (
                  <Check className="w-5 h-5 text-zinc-200 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Feedback Explanation (Practice mode) */}
        {settings.instantFeedback && revealedInInstantMode[currentIndex] && (
          <div className="mt-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700 space-y-1.5">
            <div className="font-semibold text-zinc-900 flex items-center gap-1.5">
              {userAnswers[currentIndex] === currentQ.correctOptionIndex ? (
                <>
                  <Check className="w-4 h-4 text-zinc-900" />
                  <span>Correct Answer</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-zinc-600" />
                  <span>Incorrect Selection</span>
                </>
              )}
            </div>
            <p className="leading-relaxed text-zinc-600">{currentQ.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation Controls Bar */}
      <div className="quiz-card rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-lg border transition-all ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed border-zinc-200 text-zinc-400 bg-zinc-50'
              : 'border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="text-xs text-zinc-500 font-mono hidden sm:flex items-center gap-1">
          <span className="font-semibold text-zinc-800">{answeredCount}</span>
          <span>of</span>
          <span className="font-semibold text-zinc-800">{totalQuestions}</span>
          <span>answered</span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs border-b-2 border-black"
        >
          <span>{isLastQuestion ? 'Submit Assessment' : 'Next Question'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Question Jump Palette */}
      <div className="quiz-card rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-3.5 pb-2.5 border-b border-zinc-100">
          <span className="font-semibold text-zinc-800">Quick Navigation</span>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-900" /> Answered
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full border border-zinc-700 bg-white ring-1 ring-zinc-700" /> Current
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-200" /> Unanswered
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {questions.map((_, idx) => {
            const isAnswered = userAnswers[idx] !== undefined;
            const isCurrent = idx === currentIndex;
            const isFlag = flagged.has(idx);

            let btnStyle = 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100';
            if (isCurrent) {
              btnStyle = 'ring-2 ring-zinc-900 border-zinc-900 bg-white text-zinc-900 font-bold shadow-xs';
            } else if (isAnswered) {
              btnStyle = 'bg-zinc-900 text-white border-zinc-900 font-medium';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  if (settings.timerMode === 'per-question') {
                    setQuestionTimer(settings.timerSeconds);
                  }
                }}
                className={`relative w-8 h-8 rounded-lg text-xs font-mono tabular-nums border transition-all flex items-center justify-center cursor-pointer ${btnStyle}`}
              >
                {idx + 1}
                {isFlag && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-zinc-500 border border-white ring-1 ring-zinc-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
