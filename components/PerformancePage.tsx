import React from 'react';
import { Theme } from '../types';
import PerformanceCard from './PerformanceCard';
import { PERFORMANCE_KPIS, RACE_HISTORY_DATA } from '../constants';
import { TrophyIcon } from './icons';

interface PageProps {
  theme: Theme;
}

const PerformancePage: React.FC<PageProps> = ({ theme }) => {
  const themeClasses = {
    textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
    border: theme === 'dark' ? 'border-dark-border' : 'border-light-border',
    cardBg: theme === 'dark' ? 'bg-dark-card' : 'bg-light-card',
  };

  const getPositionSuffix = (pos: number) => {
    if (pos % 100 >= 11 && pos % 100 <= 13) return 'th';
    switch (pos % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Performance Analysis</h1>
      <p className={themeClasses.textSecondary}>
        A detailed breakdown of recent results and key metrics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {PERFORMANCE_KPIS.map(kpi => (
          <PerformanceCard key={kpi.label} title={kpi.label} theme={theme}>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold">{kpi.value}</span>
              <span className={`text-sm font-semibold ${kpi.change.startsWith('+') ? 'text-accent-green' : 'text-accent-red'}`}>
                {kpi.change}
              </span>
            </div>
          </PerformanceCard>
        ))}
      </div>

      <div className="mt-6">
        <PerformanceCard title="Recent Race History" theme={theme}>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Table Header */}
              <div className={`hidden md:grid grid-cols-12 gap-4 px-4 py-3 border-b ${themeClasses.border} ${themeClasses.textSecondary} text-xs uppercase font-semibold`}>
                <div className="col-span-4">Event</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-2">Time</div>
                <div className="col-span-2 text-right">Position</div>
              </div>

              {/* Table Body */}
              <div>
                {RACE_HISTORY_DATA.map((race, index) => (
                  <div key={index} className={`grid grid-cols-2 md:grid-cols-12 gap-4 items-center px-4 py-4 ${index !== RACE_HISTORY_DATA.length - 1 ? `border-b ${themeClasses.border}` : ''}`}>
                    <div className="col-span-2 md:col-span-4 font-medium">{race.event}</div>
                    <div className={`col-span-2 md:col-span-2 text-sm ${themeClasses.textSecondary}`}>{race.location}</div>
                    <div className={`col-span-1 md:col-span-2 text-sm ${themeClasses.textSecondary}`}>{race.date}</div>
                    <div className="col-span-1 md:col-span-2 text-sm font-mono text-right md:text-left">{race.time}</div>
                    <div className="col-span-2 md:col-span-2 text-right font-bold flex justify-end items-center">
                      {race.position <= 3 && <TrophyIcon className="w-5 h-5 mr-2 text-yellow-400" />}
                      <span>{race.position}{getPositionSuffix(race.position)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PerformanceCard>
      </div>
    </div>
  );
};

export default PerformancePage;
