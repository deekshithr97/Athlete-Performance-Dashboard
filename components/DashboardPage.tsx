
import React from 'react';
import PerformanceCard from './PerformanceCard';
import SpeedAnalysisChart from './SpeedAnalysisChart';
import RaceResultsChart from './RaceResultsChart';
import EquipmentTable from './EquipmentTable';
import { Theme } from '../types';

interface DashboardPageProps {
  theme: Theme;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ theme }) => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Performance Dashboard</h1>
        <p className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
          Tracking Jess's progress in Giant Slalom
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <PerformanceCard title="Speed Analysis" theme={theme}>
            <SpeedAnalysisChart theme={theme} />
          </PerformanceCard>
        </div>
        <div className="lg:col-span-2">
          <PerformanceCard title="Race Results" theme={theme}>
            <RaceResultsChart theme={theme} />
          </PerformanceCard>
        </div>
      </div>
      <div className="mt-6">
        <PerformanceCard title="Ski Equipment & Maintenance" theme={theme}>
          <EquipmentTable theme={theme} />
        </PerformanceCard>
      </div>
    </>
  );
};

export default DashboardPage;
