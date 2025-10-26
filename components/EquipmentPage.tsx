
import React from 'react';
import PerformanceCard from './PerformanceCard';
import EquipmentTable from './EquipmentTable';
import { Theme } from '../types';

interface PageProps {
  theme: Theme;
}

const EquipmentPage: React.FC<PageProps> = ({ theme }) => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Equipment Management</h1>
        <p className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
          Manage all your ski equipment and maintenance schedules.
        </p>
      </div>
      <div className="mt-6">
        <PerformanceCard title="Ski Equipment & Maintenance" theme={theme}>
          <EquipmentTable theme={theme} />
        </PerformanceCard>
      </div>
    </>
  );
};

export default EquipmentPage;
