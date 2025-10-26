
import React from 'react';
import { Theme, EquipmentStatus } from '../types';
import { EQUIPMENT_DATA } from '../constants';
import { PlusIcon } from './icons';

interface EquipmentTableProps {
  theme: Theme;
}

const StatusBadge: React.FC<{ status: EquipmentStatus }> = ({ status }) => {
  const baseClasses = 'px-2.5 py-0.5 text-xs font-medium rounded-full inline-block';
  switch (status) {
    case EquipmentStatus.Good:
      return <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`}>{status}</span>;
    case EquipmentStatus.DueSoon:
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`}>{status}</span>;
    case EquipmentStatus.Overdue:
      return <span className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300`}>{status}</span>;
    default:
      return null;
  }
};

const EquipmentTable: React.FC<EquipmentTableProps> = ({ theme }) => {
  const themeClasses = {
    textSecondary: theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary',
    border: theme === 'dark' ? 'border-dark-border' : 'border-light-border',
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button className="flex items-center bg-accent-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Equipment
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
            {/* Table Header */}
            <div className={`hidden md:grid grid-cols-5 gap-4 px-4 py-2 border-b ${themeClasses.border} ${themeClasses.textSecondary} text-xs uppercase font-semibold`}>
                <div className="col-span-2">Equipment</div>
                <div>Purchase Date</div>
                <div>Last Maintenance</div>
                <div className="text-right">Status</div>
            </div>
            
            {/* Table Body */}
            <div>
            {EQUIPMENT_DATA.map((item, index) => (
                <div key={item.name} className={`grid grid-cols-2 md:grid-cols-5 gap-4 items-center px-4 py-3 ${index !== EQUIPMENT_DATA.length - 1 ? `border-b ${themeClasses.border}` : ''}`}>
                    <div className="col-span-2 font-medium">{item.name}</div>
                    
                    <div className="text-sm md:text-base">
                        <span className={`md:hidden font-semibold ${themeClasses.textSecondary}`}>Purchased: </span>
                        {item.purchaseDate}
                    </div>
                    
                    <div className="text-sm md:text-base">
                        <span className={`md:hidden font-semibold ${themeClasses.textSecondary}`}>Maintained: </span>
                        {item.lastMaintenance}
                    </div>

                    <div className="text-right col-span-2 md:col-span-1">
                        <StatusBadge status={item.status} />
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentTable;
