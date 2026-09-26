import React, { useEffect } from 'react';
import { ActiveQuestion, QuizAttempt, QuizSettings } from '../types/quiz';
import { RotateCcw, BookOpen, Sliders, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { formatTime, sounds } from '../utils/quizUtils';

interface QuizResultProps {
  attempt: QuizAttempt;
  questions: ActiveQuestion[];
  userAnswers: Record<number, number>;
  onTryAgain: () => void;
  onReview: () => void;
  onReconfigure: () => void;
  soundEnabled: boolean;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  attempt,
  questions,
  userAnswers,
  onTryAgain,
  onReview,
  onReconfigure,
  soundEnabled,
}) => {
  const { score, total, percentage, passed, timeSpentSeconds, settings } = attempt;
  const passingScore = Math.ceil(total * 0.85);
  const avgTimePerQuestion = total > 0 ? (timeSpentSeconds / total).toFixed(1) : '0';

  useEffect(() => {
    if (soundEnabled) {
      sounds.playFinish(passed);
    }
  }, [passed, soundEnabled]);

  return (
    <div className="max-w-2xl mx-auto py-10 sm:py-16 px-4 sm:px-6">
      {/* Primary Result Card */}
      <div className="quiz-card rounded-2xl p-6 sm:p-10 text-center">
        {/* State Icon & Badge */}
        <div className="mb-6 flex justify-center">
          {passed ? (
            <div className="w-16 h-16 rounded-2xl border-2 border-zinc-900 bg-zinc-900 text-white flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-2xl border-2 border-zinc-300 bg-zinc-100 text-zinc-700 flex items-center justify-center shadow-xs">
              <XCircle className="w-8 h-8" />
            </div>
          )}
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3">
          {passed ? 'Criterion Satisfied (≥85%)' : 'Criterion Not Reached (<85%)'}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
          {passed ? 'Assessment Passed' : 'Challenge Lost'}
        </h1>

        <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed mb-8">
          {passed ? (
            <span>
              Exemplary result. You attained{' '}
              <strong className="text-zinc-900 font-semibold font-mono">{percentage}%</strong>, satisfying the
              mandatory 85.0% threshold requirement.
            </span>
          ) : (
            <span>
              You scored <strong className="text-zinc-900 font-semibold font-mono">{percentage}%</strong>. The
              rigorous mastery rule requires at least{' '}
              <strong className="text-zinc-900 font-semibold font-mono">85.0%</strong> ({passingScore} of {total} questions).
            </span>
          )}
        </p>

        {/* Score & Threshold Metric Box */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 px-4 mb-8 bg-zinc-50/80 rounded-xl border border-zinc-200 text-left">
          <div className="p-2">
            <div className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">Score</div>
            <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums mt-0.5">
              {score} / {total}
            </div>
          </div>
          <div className="p-2">
            <div className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">Accuracy</div>
            <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums mt-0.5">
              {percentage}%
            </div>
          </div>
          <div className="p-2">
            <div className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">Total Time</div>
            <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums mt-0.5">
              {formatTime(timeSpentSeconds)}
            </div>
          </div>
          <div className="p-2">
            <div className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">Pace / Q</div>
            <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums mt-0.5">
              {avgTimePerQuestion}s
            </div>
          </div>
        </div>

        {/* Primary Action Button (Try Again for Failed, Next Challenge for Passed) */}
        <div className="space-y-3">
          {!passed ? (
            <button
              type="button"
              onClick={onTryAgain}
              className="w-full py-4 px-6 rounded-xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer border-b-2 border-black"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again (Shuffled & Fresh Questions)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onTryAgain}
              className="w-full py-4 px-6 rounded-xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer border-b-2 border-black"
            >
              <ArrowRight className="w-4 h-4" />
              <span>New Challenge (Different Questions)</span>
            </button>
          )}

          {/* Secondary Options */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={onReview}
              className="py-3 px-4 text-xs font-semibold rounded-xl border border-zinc-200 border-b-2 text-zinc-800 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
              <span>Review Explanations</span>
            </button>

            <button
              type="button"
              onClick={onReconfigure}
              className="py-3 px-4 text-xs font-semibold rounded-xl border border-zinc-200 border-b-2 text-zinc-800 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-zinc-600" />
              <span>Change Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Note on Retries */}
      <div className="mt-8 text-center text-xs text-zinc-500 leading-relaxed">
        Attempts prioritize unencountered questions from the question bank. Options and questions are freshly randomized on each trial.
      </div>
    </div>
  );
};
