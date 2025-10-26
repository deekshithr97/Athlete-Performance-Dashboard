
import React from 'react';
import { Theme, Page } from '../types';
import { MENU_ITEMS, RECENT_ACTIVITY, QUICK_STATS, SETTINGS_ITEM } from '../constants';

interface SidebarProps {
  theme: Theme;
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ theme, activePage, setActivePage }) => {
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-dark-card' : 'bg-light-card',
    text: theme === 'dark' ? 'text-dark-text' : 'text-light-text',
    textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
    border: theme === 'dark' ? 'border-dark-border' : 'border-light-border',
    activeBg: theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg',
    hoverBg: theme === 'dark' ? 'hover:bg-dark-bg' : 'hover:bg-light-bg',
  };

  return (
    <aside className={`w-64 min-h-screen p-6 flex-col hidden lg:flex ${themeClasses.bg} ${themeClasses.text}`}>
      <div className="flex flex-col items-center text-center">
        <img src="https://i.pravatar.cc/100?u=jess" alt="Jess" className="w-24 h-24 rounded-full" />
        <h2 className="mt-4 text-xl font-semibold">Jess</h2>
        <p className={themeClasses.textSecondary}>Giant Slalom</p>
        <p className={themeClasses.textSecondary}>Team USA</p>
      </div>

      <nav className="mt-8">
        <h3 className={`text-xs font-semibold tracking-wider uppercase ${themeClasses.textSecondary}`}>Menu</h3>
        <ul className="mt-2 space-y-1">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.name as Page);
                }}
                className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  activePage === item.name ? `${themeClasses.activeBg} text-accent-blue` : `${themeClasses.textSecondary} ${themeClasses.hoverBg}`
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10">
        <h3 className={`text-xs font-semibold tracking-wider uppercase ${themeClasses.textSecondary}`}>Recent Activity</h3>
        <ul className="mt-3 space-y-4">
          {RECENT_ACTIVITY.map((activity) => (
            <li key={activity.title} className="flex items-start">
              <div className={`mt-1 mr-3 flex-shrink-0 ${activity.color}`}>
                <activity.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium">{activity.title}</p>
                <p className={`text-xs ${themeClasses.textSecondary}`}>{activity.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-auto pt-6 border-t ${themeClasses.border}`}>
        <div className={`p-4 rounded-lg ${themeClasses.activeBg}`}>
          <h3 className="text-sm font-semibold">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            {QUICK_STATS.map(stat => (
              <div key={stat.label}>
                <p className={`text-xs ${themeClasses.textSecondary}`}>{stat.label}</p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
         <a href="#" className={`flex items-center px-3 py-2 rounded-lg font-medium text-sm transition-colors ${themeClasses.textSecondary} ${themeClasses.hoverBg}`}>
             <SETTINGS_ITEM.icon className="w-5 h-5 mr-3" />
             {SETTINGS_ITEM.name}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
