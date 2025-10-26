
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Theme } from '../types';
import { SPEED_CHART_DATA } from '../constants';


interface SpeedAnalysisChartProps {
    theme: Theme;
}

const SpeedAnalysisChart: React.FC<SpeedAnalysisChartProps> = ({ theme }) => {
    const themeColors = {
        grid: theme === 'dark' ? '#30363D' : '#E5E7EB',
        text: theme === 'dark' ? '#8B949E' : '#6B7280',
        line: '#3B82F6',
        fill: '#3B82F6',
    };
    
  return (
    <div>
        <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-bold">65 mph</span>
            <span className="text-lg font-semibold text-accent-green">+5%</span>
        </div>
        <p className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>Last 12 Months</p>
        <div className="h-64 mt-4 -ml-8">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SPEED_CHART_DATA} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={themeColors.fill} stopOpacity={0.4}/>
                            <stop offset="95%" stopColor={themeColors.fill} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke={themeColors.text} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis hide={true} domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: theme === 'dark' ? '#161B22' : '#FFFFFF', 
                            borderColor: theme === 'dark' ? '#30363D' : '#E5E7EB',
                            borderRadius: '0.5rem'
                        }}
                    />
                    <Area type="monotone" dataKey="speed" stroke={themeColors.line} strokeWidth={2} fillOpacity={1} fill="url(#colorSpeed)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default SpeedAnalysisChart;
