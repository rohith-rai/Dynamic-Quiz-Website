import React, { useState } from 'react';
import { ActiveQuestion, QuizAttempt } from '../types/quiz';
import { ArrowLeft, RotateCcw, Check, X } from 'lucide-react';

interface QuizReviewProps {
  questions: ActiveQuestion[];
  userAnswers: Record<number, number>;
  attempt: QuizAttempt;
  onBackToResult: () => void;
  onTryAgain: () => void;
}

export const QuizReview: React.FC<QuizReviewProps> = ({
  questions,
  userAnswers,
  attempt,
  onBackToResult,
  onTryAgain,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct'>('all');

  const questionResults = questions.map((q, idx) => {
    const selected = userAnswers[idx];
    const isCorrect = selected === q.correctOptionIndex;
    const isUnanswered = selected === undefined;
    return {
      q,
      idx,
      selected,
      isCorrect,
      isUnanswered,
    };
  });

  const incorrectCount = questionResults.filter((r) => !r.isCorrect).length;
  const correctCount = questionResults.filter((r) => r.isCorrect).length;

  const filteredQuestions = questionResults.filter((r) => {
    if (filter === 'incorrect') return !r.isCorrect;
    if (filter === 'correct') return r.isCorrect;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Top Header */}
      <div className="quiz-card rounded-2xl p-6 sm:p-7 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={onBackToResult}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 mb-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Score Summary</span>
            </button>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Assessment Explanations & Review
            </h1>
            <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
              <span className="font-mono font-semibold text-zinc-800 bg-zinc-100 px-2 py-0.5 rounded">
                Score: {attempt.percentage}%
              </span>
              <span>·</span>
              <span>{attempt.score} of {attempt.total} questions correct</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onTryAgain}
            className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-xs self-start sm:self-auto cursor-pointer border-b-2 border-black"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-zinc-100">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            All Questions ({questions.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('incorrect')}
            className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              filter === 'incorrect'
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            Missed ({incorrectCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('correct')}
            className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              filter === 'correct'
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            Correct ({correctCount})
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center quiz-card rounded-2xl text-xs text-zinc-500">
            No questions match the selected filter.
          </div>
        ) : (
          filteredQuestions.map(({ q, idx, selected, isCorrect, isUnanswered }) => (
            <div
              key={q.id}
              className="quiz-card rounded-2xl p-5 sm:p-6"
            >
              {/* Question Header & Status */}
              <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 pb-3 border-b border-zinc-100">
                <span className="font-bold text-zinc-900 font-mono">Question {idx + 1}</span>
                <span className="capitalize text-zinc-500 text-[11px]">
                  {q.category} · {q.level}
                </span>
                <div className="flex items-center gap-1.5">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded text-[11px]">
                      <Check className="w-3.5 h-3.5 text-zinc-900" /> Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded text-[11px]">
                      <X className="w-3.5 h-3.5 text-zinc-500" />
                      {isUnanswered ? 'Unanswered' : 'Incorrect'}
                    </span>
                  )}
                </div>
              </div>

              {/* Prompt */}
              <h3 className="text-sm sm:text-base font-semibold text-zinc-900 mb-4 leading-snug">
                {q.question}
              </h3>

              {/* Options Breakdown */}
              <div className="space-y-2 mb-4">
                {q.shuffledOptions.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isUserSelection = selected === optIdx;
                  const isRightAnswer = optIdx === q.correctOptionIndex;

                  let rowStyle = 'border-zinc-200 bg-white text-zinc-600';
                  if (isRightAnswer) {
                    rowStyle = 'border-zinc-900 bg-zinc-900 text-white font-medium shadow-xs';
                  } else if (isUserSelection && !isRightAnswer) {
                    rowStyle = 'border-zinc-300 bg-zinc-100 text-zinc-600 line-through';
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${rowStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-semibold border ${
                            isRightAnswer
                              ? 'border-zinc-700 bg-zinc-800 text-white'
                              : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      <div className="text-[11px] font-mono shrink-0">
                        {isRightAnswer && <span>✓ Correct Choice</span>}
                        {isUserSelection && !isRightAnswer && <span>(Your Selection)</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-xs leading-relaxed text-zinc-700">
                <span className="font-semibold text-zinc-900 block mb-1">Detailed Explanation:</span>
                {q.explanation}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Navigation */}
      <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToResult}
          className="text-xs text-zinc-600 hover:text-zinc-900 font-semibold transition-colors cursor-pointer"
        >
          ← Back to Results
        </button>

        <button
          type="button"
          onClick={onTryAgain}
          className="flex items-center gap-2 py-3 px-5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer border-b-2 border-black"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Try Again (Fresh Questions)</span>
        </button>
      </div>
    </div>
  );
};
