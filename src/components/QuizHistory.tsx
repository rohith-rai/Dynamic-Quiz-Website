import React from 'react';
import { QuizAttempt } from '../types/quiz';
import { ArrowLeft, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { formatTime } from '../utils/quizUtils';

interface QuizHistoryProps {
  attempts: QuizAttempt[];
  onBackToSetup: () => void;
  onClearHistory: () => void;
  onStartWithSettings: (settings: QuizAttempt['settings']) => void;
}

export const QuizHistory: React.FC<QuizHistoryProps> = ({
  attempts,
  onBackToSetup,
  onClearHistory,
  onStartWithSettings,
}) => {
  const total = attempts.length;
  const passedCount = attempts.filter((a) => a.passed).length;
  const passRate = total > 0 ? Math.round((passedCount / total) * 100) : 0;
  const avgPercentage =
    total > 0
      ? (attempts.reduce((acc, curr) => acc + curr.percentage, 0) / total).toFixed(1)
      : '0.0';

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="quiz-card rounded-2xl p-6 sm:p-7 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={onBackToSetup}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 mb-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Assessment Setup</span>
            </button>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Historical Assessment Record
            </h1>
            <p className="text-xs text-zinc-500 mt-1">
              Performance logs scored against the mandatory 85% mastery requirement.
            </p>
          </div>

          {total > 0 && (
            <button
              type="button"
              onClick={onClearHistory}
              className="flex items-center gap-1.5 py-2 px-3 rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 text-xs transition-colors self-start sm:self-auto cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {/* Aggregate Metrics */}
        {total > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-100">
            <div className="bg-zinc-50/80 border border-zinc-200/80 rounded-xl p-3.5 sm:p-4">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">Assessments</div>
              <div className="text-2xl font-bold font-mono text-zinc-900 mt-1 tabular-nums">{total}</div>
            </div>
            <div className="bg-zinc-50/80 border border-zinc-200/80 rounded-xl p-3.5 sm:p-4">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">Pass Rate (≥85%)</div>
              <div className="text-2xl font-bold font-mono text-zinc-900 mt-1 tabular-nums">{passRate}%</div>
            </div>
            <div className="bg-zinc-50/80 border border-zinc-200/80 rounded-xl p-3.5 sm:p-4">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">Average Score</div>
              <div className="text-2xl font-bold font-mono text-zinc-900 mt-1 tabular-nums">
                {avgPercentage}%
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Attempt List */}
      <div className="space-y-3">
        {total === 0 ? (
          <div className="p-12 text-center quiz-card rounded-2xl text-xs text-zinc-500">
            No historical attempts recorded yet. Configure and start an assessment to begin.
          </div>
        ) : (
          attempts.map((att) => {
            const dateStr = new Date(att.timestamp).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={att.id}
                className="quiz-card rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {att.passed ? (
                      <span className="w-5 h-5 rounded-md bg-zinc-900 text-white flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 flex items-center justify-center">
                        <XCircle className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 flex items-center gap-2">
                      <span className="capitalize">{att.settings.category}</span>
                      <span className="text-zinc-400">·</span>
                      <span className="capitalize">{att.settings.level}</span>
                      <span className="text-zinc-400">·</span>
                      <span className="text-zinc-500 font-normal">{att.total} Questions</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1 font-mono">{dateStr}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-100">
                  <div className="text-left sm:text-right">
                    <div className="text-sm font-bold font-mono text-zinc-900 tabular-nums">
                      {att.score} / {att.total} ({att.percentage}%)
                    </div>
                    <div className="text-[10px] text-zinc-500 font-medium">
                      {att.passed ? 'Status: Passed' : 'Status: Lost (<85%)'} ·{' '}
                      {formatTime(att.timeSpentSeconds)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartWithSettings(att.settings)}
                    className="py-1.5 px-3 text-xs font-semibold rounded-lg border border-zinc-200 border-b-2 text-zinc-700 bg-white hover:text-zinc-900 hover:border-zinc-300 transition-colors cursor-pointer"
                  >
                    Repeat Setup
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
