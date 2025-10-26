
import React from 'react';
import { Theme } from '../types';
import { MoonIcon, SunIcon } from './icons';

interface DashboardHeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ theme, toggleTheme }) => {
    const themeClasses = {
        textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
        hoverBg: theme === 'dark' ? 'hover:bg-dark-border' : 'hover:bg-light-border',
    }

  return (
    <header className="flex justify-between items-center">
      <h1 className={`text-xl font-semibold hidden sm:block ${themeClasses.textSecondary}`}>Athlete Performance Dashboard</h1>
      <div className="flex-1 sm:hidden" />
      <button 
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors ${themeClasses.hoverBg} ${themeClasses.textSecondary}`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
      </button>
    </header>
  );
};

export default DashboardHeader;
