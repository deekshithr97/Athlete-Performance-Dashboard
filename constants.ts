import { EquipmentStatus, EquipmentItem } from './types';
import { 
    DashboardIcon, PerformanceIcon, TrainingIcon, EquipmentIcon, SettingsIcon, 
    CheckCircleIcon, WarningIcon, CalendarIcon, DumbbellIcon, SkiIcon, TrophyIcon
} from './components/icons';

export const MENU_ITEMS = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Performance', icon: PerformanceIcon },
    { name: 'Training', icon: TrainingIcon },
    { name: 'Equipment', icon: EquipmentIcon },
];

export const RECENT_ACTIVITY = [
    { 
        title: 'New personal best!',
        details: '1:15.23 at Aspen Cup',
        icon: CheckCircleIcon,
        color: 'text-accent-blue'
    },
    { 
        title: 'Equipment Maintenance',
        details: 'Giro helmet due for check',
        icon: WarningIcon,
        color: 'text-accent-yellow'
    },
    { 
        title: 'Upcoming Race',
        details: 'Beaver Creek Open',
        icon: CalendarIcon,
        color: 'text-dark-text-secondary'
    },
];

export const QUICK_STATS = [
    { label: 'Avg Speed', value: '65 mph' },
    { label: 'Best Time', value: '1:15.23' },
    { label: 'Podiums', value: '18' },
    { label: 'Win Rate', value: '40%' },
];

export const SETTINGS_ITEM = {
    name: 'Settings',
    icon: SettingsIcon
};

export const SPEED_CHART_DATA = [
    { name: 'Jan', speed: 62 },
    { name: 'Feb', speed: 65 },
    { name: 'Mar', speed: 60 },
    { name: 'Apr', speed: 68 },
    { name: 'May', speed: 64 },
    { name: 'Jun', speed: 67 },
];

export const RACE_RESULTS_DATA = [
    { position: '1st', value: 80 },
    { position: '2nd', value: 40 },
    { position: '3rd', value: 70 },
    { position: '4th', value: 55 },
    { position: '5th', value: 65 },
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
    {
        name: 'Atomic Redster G9',
        purchaseDate: '2023-09-01',
        lastMaintenance: '2024-02-20',
        nextMaintenance: '2024-03-05',
        status: EquipmentStatus.Good,
    },
    {
        name: 'Leki WCR GS Poles',
        purchaseDate: '2023-10-15',
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-04-10',
        status: EquipmentStatus.Good,
    },
    {
        name: 'Giro Strive MIPS Helmet',
        purchaseDate: '2022-11-20',
        lastMaintenance: '2023-12-15',
        nextMaintenance: '2024-03-01',
        status: EquipmentStatus.DueSoon,
    },
    {
        name: 'Oakley Flight Deck Goggles',
        purchaseDate: '2023-11-01',
        lastMaintenance: '2024-02-15',
        nextMaintenance: '2024-05-15',
        status: EquipmentStatus.Good,
    },
    {
        name: 'Atomic Hawx Ultra Boots',
        purchaseDate: '2023-08-10',
        lastMaintenance: '2024-01-05',
        nextMaintenance: '2024-02-28',
        status: EquipmentStatus.Overdue,
    },
];

export const PERFORMANCE_KPIS = [
    { label: 'Season Best', value: '1:14.89', change: '-0.34s' },
    { label: 'Podium Finishes', value: '8', change: '+2' },
    { label: 'Avg. Position', value: '4.2', change: '-0.5' },
    { label: 'Races Won', value: '3', change: '+1' },
];

export const RACE_HISTORY_DATA = [
    { event: 'Aspen Cup Finals', date: '2024-03-15', time: '1:14.89', position: 1, location: 'Aspen, CO' },
    { event: 'Beaver Creek Open', date: '2024-03-02', time: '1:15.12', position: 3, location: 'Beaver Creek, CO' },
    { event: 'Park City Invitational', date: '2024-02-18', time: '1:15.53', position: 5, location: 'Park City, UT' },
    { event: 'Sun Valley Qualifiers', date: '2024-02-05', time: '1:15.01', position: 2, location: 'Sun Valley, ID' },
    { event: 'Vail Championship', date: '2024-01-20', time: '1:16.20', position: 8, location: 'Vail, CO' },
    { event: 'Deer Valley Pro', date: '2024-01-08', time: '1:14.95', position: 1, location: 'Deer Valley, UT' },
];

export const TRAINING_SCHEDULE = [
    { day: 'Monday', type: 'Gym Session', details: 'Strength & Conditioning', time: '9:00 AM - 11:00 AM', icon: DumbbellIcon, color: 'bg-red-500' },
    { day: 'Tuesday', type: 'On-Snow Training', details: 'Slalom Gate Drills', time: '8:00 AM - 12:00 PM', icon: SkiIcon, color: 'bg-blue-500' },
    { day: 'Wednesday', type: 'Rest & Recovery', details: 'Stretching & Video Analysis', time: 'All Day', icon: CheckCircleIcon, color: 'bg-green-500' },
    { day: 'Thursday', type: 'On-Snow Training', details: 'Giant Slalom Timed Runs', time: '8:00 AM - 12:00 PM', icon: SkiIcon, color: 'bg-blue-500' },
    { day: 'Friday', type: 'Gym Session', details: 'Agility & Plyometrics', time: '10:00 AM - 12:00 PM', icon: DumbbellIcon, color: 'bg-red-500' },
    { day: 'Saturday', type: 'Free Skiing', details: 'Technique Focus', time: '9:00 AM - 1:00 PM', icon: SkiIcon, color: 'bg-blue-500' },
    { day: 'Sunday', type: 'Rest Day', details: 'Active Recovery', time: 'All Day', icon: CheckCircleIcon, color: 'bg-green-500' },
];