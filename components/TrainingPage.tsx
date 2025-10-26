import React from 'react';
import { Theme } from '../types';
import PerformanceCard from './PerformanceCard';
import { TRAINING_SCHEDULE } from '../constants';

interface PageProps {
  theme: Theme;
}

const TrainingPage: React.FC<PageProps> = ({ theme }) => {
  const themeClasses = {
    textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
    cardBg: theme === 'dark' ? 'bg-dark-card' : 'bg-light-card',
    border: theme === 'dark' ? 'border-dark-border' : 'border-light-border',
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Training Schedule</h1>
      <p className={themeClasses.textSecondary}>
        Weekly plan for on-snow training, gym sessions, and recovery.
      </p>

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {TRAINING_SCHEDULE.map((item) => (
                <div key={item.day} className={`p-5 rounded-xl shadow-sm flex items-start space-x-4 ${themeClasses.cardBg} border ${themeClasses.border}`}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{item.day} - <span className="font-medium">{item.type}</span></p>
                        <p className={`text-sm ${themeClasses.textSecondary}`}>{item.details}</p>
                        <p className={`text-xs mt-1 font-mono px-2 py-0.5 rounded inline-block ${theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'}`}>{item.time}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
