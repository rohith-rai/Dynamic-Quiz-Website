import React from 'react';
import { QuizCategory, QuizLevel, QuizSettings, TimerMode, QuizAttempt } from '../types/quiz';
import { CATEGORIES } from '../data/questions';
import { ArrowRight, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface QuizSetupProps {
  settings: QuizSettings;
  onChangeSettings: (settings: QuizSettings) => void;
  onStartQuiz: () => void;
  pastAttempts: QuizAttempt[];
}

export const QuizSetup: React.FC<QuizSetupProps> = ({
  settings,
  onChangeSettings,
  onStartQuiz,
  pastAttempts,
}) => {
  const updateSetting = <K extends keyof QuizSettings>(key: K, value: QuizSettings[K]) => {
    onChangeSettings({
      ...settings,
      [key]: value,
    });
  };

  // Quick stats
  const totalAttempts = pastAttempts.length;
  const passedAttempts = pastAttempts.filter((a) => a.passed).length;
  const passRate = totalAttempts > 0 ? Math.round((passedAttempts / totalAttempts) * 100) : 0;
  const avgScore =
    totalAttempts > 0
      ? (pastAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / totalAttempts).toFixed(1)
      : '0.0';

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Title & Introduction */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
          Assessment Configuration
        </h1>
        <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
          Customize your evaluation parameters below. To achieve a passing grade, you must reach or exceed an <strong className="font-semibold text-zinc-900">85% score threshold</strong>.
        </p>
      </div>

      {/* 85% Rule Minimalist Notice */}
      <div className="mb-8 p-4 sm:p-5 bg-white border border-zinc-200 border-l-4 border-l-zinc-900 rounded-xl shadow-xs flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
          <span className="font-semibold text-zinc-900">Strict Mastery Standard:</span> If your final score is less than <span className="font-mono font-semibold text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded">85%</span>, the attempt is marked as failed. You will be prompted to try again with a newly randomized and reshuffled set of questions.
        </div>
      </div>

      <div className="space-y-8 quiz-card rounded-2xl p-6 sm:p-8">
        {/* 1. Quiz Level Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              01. Difficulty Level
            </label>
            <span className="text-[11px] font-mono text-zinc-400 capitalize">{settings.level}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {(['beginner', 'intermediate', 'advanced'] as QuizLevel[]).map((level) => {
              const isActive = settings.level === level;
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => updateSetting('level', level)}
                  className={`py-3 px-3 sm:px-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-white border-zinc-900 border-b-3 border-b-black shadow-xs'
                      : 'bg-white text-zinc-700 border-zinc-200 border-b-2 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-semibold capitalize">{level}</div>
                  <div className={`text-[11px] mt-0.5 ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {level === 'beginner' && 'Foundational concepts'}
                    {level === 'intermediate' && 'Applied principles'}
                    {level === 'advanced' && 'Nuanced mastery'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Category Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              02. Knowledge Domain
            </label>
            <span className="text-[11px] text-zinc-400">8 Domains Available</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = settings.category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => updateSetting('category', cat.id)}
                  className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-white border-zinc-900 border-b-3 border-b-black shadow-xs'
                      : 'bg-white text-zinc-800 border-zinc-200 border-b-2 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-semibold">{cat.name}</div>
                  <div
                    className={`text-[11px] mt-1 leading-snug line-clamp-1 ${
                      isActive ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {cat.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Number of Questions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              03. Question Count
            </label>
            <span className="text-[11px] text-zinc-400">
              Must pass ≥ 85%
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[5, 10, 15, 20].map((count) => {
              const isActive = settings.questionCount === count;
              const requiredCorrect = Math.ceil(count * 0.85);
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => updateSetting('questionCount', count)}
                  className={`py-3 px-2 sm:px-3 text-center rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 text-white border-zinc-900 border-b-3 border-b-black shadow-xs'
                      : 'bg-white text-zinc-700 border-zinc-200 border-b-2 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <div className="text-sm sm:text-base font-bold font-mono tabular-nums">{count}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    Need {requiredCorrect} to pass
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Timer Settings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              04. Timer Constraints
            </label>
            <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
              {settings.timerMode === 'per-question' && `${settings.timerSeconds}s / question`}
              {settings.timerMode === 'total' && `${Math.round(settings.timerSeconds / 60)}m total exam`}
              {settings.timerMode === 'none' && 'Untimed assessment'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <button
              type="button"
              onClick={() => {
                updateSetting('timerMode', 'per-question');
                if (settings.timerSeconds > 90) updateSetting('timerSeconds', 30);
              }}
              className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                settings.timerMode === 'per-question'
                  ? 'bg-zinc-900 text-white border-zinc-900 border-b-2'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              Per Question
            </button>
            <button
              type="button"
              onClick={() => {
                updateSetting('timerMode', 'total');
                if (settings.timerSeconds <= 90) updateSetting('timerSeconds', 300);
              }}
              className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                settings.timerMode === 'total'
                  ? 'bg-zinc-900 text-white border-zinc-900 border-b-2'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              Total Time
            </button>
            <button
              type="button"
              onClick={() => updateSetting('timerMode', 'none')}
              className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                settings.timerMode === 'none'
                  ? 'bg-zinc-900 text-white border-zinc-900 border-b-2'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              Untimed (Zen)
            </button>
          </div>

          {/* Sub-durations */}
          {settings.timerMode === 'per-question' && (
            <div className="grid grid-cols-4 gap-2 pt-1">
              {[15, 30, 45, 60].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => updateSetting('timerSeconds', sec)}
                  className={`py-1.5 text-xs font-mono rounded-lg border tabular-nums transition-colors cursor-pointer ${
                    settings.timerSeconds === sec
                      ? 'bg-zinc-800 text-white border-zinc-800'
                      : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {sec}s
                </button>
              ))}
            </div>
          )}

          {settings.timerMode === 'total' && (
            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { label: '2 Minutes', sec: 120 },
                { label: '5 Minutes', sec: 300 },
                { label: '10 Minutes', sec: 600 },
              ].map((item) => (
                <button
                  key={item.sec}
                  type="button"
                  onClick={() => updateSetting('timerSeconds', item.sec)}
                  className={`py-1.5 text-xs font-mono rounded-lg border tabular-nums transition-colors cursor-pointer ${
                    settings.timerSeconds === item.sec
                      ? 'bg-zinc-800 text-white border-zinc-800'
                      : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 5. Additional Mode Preferences */}
        <div className="pt-2 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <label className="flex items-center gap-2.5 cursor-pointer text-zinc-700">
            <input
              type="checkbox"
              checked={settings.instantFeedback}
              onChange={(e) => updateSetting('instantFeedback', e.target.checked)}
              className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-0 focus:ring-offset-0"
            />
            <span>Instant feedback after each question (Practice mode)</span>
          </label>
        </div>

        {/* Start Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onStartQuiz}
            className="w-full py-4 px-6 rounded-xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer border-b-2 border-black"
          >
            <span>Begin Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Summary of Past Performance */}
      {totalAttempts > 0 && (
        <div className="mt-8 quiz-card rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4 pb-2.5 border-b border-zinc-100">
            <span>Historical Track Record</span>
            <span className="text-[11px] font-mono text-zinc-400 font-normal">Stored Locally</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums">{totalAttempts}</div>
              <div className="text-xs text-zinc-500 mt-0.5">Total Assessments</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums">{passRate}%</div>
              <div className="text-xs text-zinc-500 mt-0.5">Pass Rate (≥ 85%)</div>
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-zinc-900 tabular-nums">{avgScore}%</div>
              <div className="text-xs text-zinc-500 mt-0.5">Average Score</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
