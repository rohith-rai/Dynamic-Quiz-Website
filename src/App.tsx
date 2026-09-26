import React, { useState, useEffect, useCallback } from 'react';
import {
  ActiveQuestion,
  QuizAttempt,
  QuizSettings,
} from './types/quiz';
import {
  calculateQuizResults,
  loadQuizHistory,
  prepareQuizQuestions,
  saveQuizAttempt,
} from './utils/quizUtils';
import { Header } from './components/Header';
import { QuizSetup } from './components/QuizSetup';
import { QuizActive } from './components/QuizActive';
import { QuizResult } from './components/QuizResult';
import { QuizReview } from './components/QuizReview';
import { QuizHistory } from './components/QuizHistory';

const DEFAULT_SETTINGS: QuizSettings = {
  level: 'intermediate',
  category: 'all',
  questionCount: 10,
  timerMode: 'per-question',
  timerSeconds: 30,
  instantFeedback: false,
  soundEnabled: true,
};

export default function App() {
  const [currentView, setCurrentView] = useState<'setup' | 'quiz' | 'result' | 'review' | 'history'>('setup');
  const [settings, setSettings] = useState<QuizSettings>(DEFAULT_SETTINGS);
  const [activeQuestions, setActiveQuestions] = useState<ActiveQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);
  const [history, setHistory] = useState<QuizAttempt[]>([]);
  const [seenQuestionIds, setSeenQuestionIds] = useState<Set<string>>(new Set());

  // Load history from storage on mount
  useEffect(() => {
    const loaded = loadQuizHistory();
    setHistory(loaded);
  }, []);

  // Toggle sound
  const handleToggleSound = () => {
    setSettings((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled,
    }));
  };

  // Start Quiz (generates fresh questions)
  const handleStartQuiz = useCallback(() => {
    const newQuestions = prepareQuizQuestions(settings, seenQuestionIds);

    // Update seen question IDs for this session
    setSeenQuestionIds((prev) => {
      const next = new Set(prev);
      newQuestions.forEach((q) => next.add(q.id));
      return next;
    });

    setActiveQuestions(newQuestions);
    setUserAnswers({});
    setCurrentView('quiz');
  }, [settings, seenQuestionIds]);

  // Finish Quiz and calculate results
  const handleFinishQuiz = useCallback(
    (answers: Record<number, number>, timeSpentSeconds: number) => {
      setUserAnswers(answers);
      const attempt = calculateQuizResults(
        activeQuestions,
        answers,
        timeSpentSeconds,
        settings
      );
      setLastAttempt(attempt);
      saveQuizAttempt(attempt);
      setHistory((prev) => [attempt, ...prev]);
      setCurrentView('result');
    },
    [activeQuestions, settings]
  );

  // Try Again: generates different or shuffled questions
  const handleTryAgain = useCallback(() => {
    const newQuestions = prepareQuizQuestions(settings, seenQuestionIds);

    setSeenQuestionIds((prev) => {
      const next = new Set(prev);
      newQuestions.forEach((q) => next.add(q.id));
      return next;
    });

    setActiveQuestions(newQuestions);
    setUserAnswers({});
    setCurrentView('quiz');
  }, [settings, seenQuestionIds]);

  // Abort Quiz
  const handleAbortQuiz = () => {
    setCurrentView('setup');
    setActiveQuestions([]);
    setUserAnswers({});
  };

  // Clear History
  const handleClearHistory = () => {
    localStorage.removeItem('criterion_quiz_attempts_v1');
    setHistory([]);
  };

  // Repeat Setup from history
  const handleStartWithSettings = (historicSettings: QuizSettings) => {
    setSettings(historicSettings);
    setCurrentView('setup');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col selection:bg-zinc-200 selection:text-zinc-900">
      <Header
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onResetQuiz={currentView === 'quiz' ? handleAbortQuiz : undefined}
        soundEnabled={settings.soundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main className="flex-1 pb-16">
        {currentView === 'setup' && (
          <QuizSetup
            settings={settings}
            onChangeSettings={setSettings}
            onStartQuiz={handleStartQuiz}
            pastAttempts={history}
          />
        )}

        {currentView === 'quiz' && activeQuestions.length > 0 && (
          <QuizActive
            questions={activeQuestions}
            settings={settings}
            onFinishQuiz={handleFinishQuiz}
            onAbortQuiz={handleAbortQuiz}
          />
        )}

        {currentView === 'result' && lastAttempt && (
          <QuizResult
            attempt={lastAttempt}
            questions={activeQuestions}
            userAnswers={userAnswers}
            onTryAgain={handleTryAgain}
            onReview={() => setCurrentView('review')}
            onReconfigure={() => setCurrentView('setup')}
            soundEnabled={settings.soundEnabled}
          />
        )}

        {currentView === 'review' && lastAttempt && (
          <QuizReview
            questions={activeQuestions}
            userAnswers={userAnswers}
            attempt={lastAttempt}
            onBackToResult={() => setCurrentView('result')}
            onTryAgain={handleTryAgain}
          />
        )}

        {currentView === 'history' && (
          <QuizHistory
            attempts={history}
            onBackToSetup={() => setCurrentView('setup')}
            onClearHistory={handleClearHistory}
            onStartWithSettings={handleStartWithSettings}
          />
        )}
      </main>

      {/* Minimal Editorial Footer */}
      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>Criterion Minimalist Assessment System</div>
          <div className="text-[11px] text-zinc-400">
            Passing Standard: 85.0% · Monochromatic Design System
          </div>
        </div>
      </footer>
    </div>
  );
}
