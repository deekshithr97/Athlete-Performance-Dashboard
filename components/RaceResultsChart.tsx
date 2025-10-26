
import React from 'react';
import { Theme } from '../types';
import { RACE_RESULTS_DATA } from '../constants';

interface RaceResultsChartProps {
    theme: Theme;
}

const RaceResultsChart: React.FC<RaceResultsChartProps> = ({ theme }) => {
    const themeClasses = {
        textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
        bgSecondary: theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg',
    };
    
  return (
    <div>
      <div className="flex items-baseline space-x-2">
        <span className="text-4xl font-bold">1st</span>
        <span className="text-lg font-semibold text-accent-green">+10%</span>
      </div>
      <p className={themeClasses.textSecondary}>Most frequent position</p>
      <div className="mt-8 space-y-4">
        {RACE_RESULTS_DATA.map(result => (
          <div key={result.position} className="flex items-center">
            <span className="w-10 text-sm font-medium">{result.position}</span>
            <div className={`flex-1 h-3 rounded-full ${themeClasses.bgSecondary}`}>
              <div
                className="h-3 bg-accent-blue rounded-full"
                style={{ width: `${result.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceResultsChart;
