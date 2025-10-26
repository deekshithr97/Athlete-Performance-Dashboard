
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardPage from './components/DashboardPage';
import PerformancePage from './components/PerformancePage';
import TrainingPage from './components/TrainingPage';
import EquipmentPage from './components/EquipmentPage';
import { Theme, Page } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activePage, setActivePage] = useState<Page>('Dashboard');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg',
    text: theme === 'dark' ? 'text-dark-text' : 'text-light-text',
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardPage theme={theme} />;
      case 'Performance':
        return <PerformancePage theme={theme} />;
      case 'Training':
        return <TrainingPage theme={theme} />;
      case 'Equipment':
        return <EquipmentPage theme={theme} />;
      default:
        return <DashboardPage theme={theme} />;
    }
  };

  return (
    <div className={`flex min-h-screen font-sans ${themeClasses.bg} ${themeClasses.text}`}>
      <Sidebar theme={theme} activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <DashboardHeader theme={theme} toggleTheme={toggleTheme} />
        {renderActivePage()}
      </main>
    </div>
  );
};

export default App;
