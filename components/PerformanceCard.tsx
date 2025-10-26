
import React from 'react';
import { Theme } from '../types';

interface PerformanceCardProps {
  title: string;
  theme: Theme;
  children: React.ReactNode;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ title, theme, children }) => {
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-dark-card' : 'bg-light-card',
    border: theme === 'dark' ? 'border-dark-border' : 'border-light-border',
  };

  return (
    <div className={`p-6 rounded-xl shadow-sm ${themeClasses.bg} border ${themeClasses.border}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default PerformanceCard;
