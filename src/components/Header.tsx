import React from 'react';
import { Volume2, VolumeX, RotateCcw, Award } from 'lucide-react';

interface HeaderProps {
  currentView: 'setup' | 'quiz' | 'result' | 'review' | 'history';
  onNavigate: (view: 'setup' | 'history') => void;
  onResetQuiz?: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onResetQuiz,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => onNavigate('setup')}
          className="text-base font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span className="w-6 h-6 rounded-md bg-zinc-900 text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs">
            Q
          </span>
          <span>Criterion</span>
          <span className="text-zinc-400 font-normal text-xs tracking-normal">Quiz</span>
        </button>

        {/* Zone 2: Navigation links */}
        <nav className="flex items-center gap-5 sm:gap-6 text-xs font-medium text-zinc-600">
          <button
            onClick={() => onNavigate('setup')}
            className={`transition-colors hover:text-zinc-900 cursor-pointer ${
              currentView === 'setup' ? 'text-zinc-900 font-bold' : ''
            }`}
          >
            Configure
          </button>
          <button
            onClick={() => onNavigate('history')}
            className={`transition-colors hover:text-zinc-900 cursor-pointer ${
              currentView === 'history' ? 'text-zinc-900 font-bold' : ''
            }`}
          >
            Past Attempts
          </button>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200/80 font-mono text-[11px]">
            <Award className="w-3.5 h-3.5 text-zinc-700" />
            <span>Pass ≥ 85%</span>
          </div>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
            title={soundEnabled ? 'Sound enabled' : 'Sound muted'}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-zinc-200"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-zinc-400" />
            )}
          </button>

          {currentView === 'quiz' && onResetQuiz && (
            <button
              onClick={onResetQuiz}
              title="Exit current quiz"
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-200 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Abort</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
