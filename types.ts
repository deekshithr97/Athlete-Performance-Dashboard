
export type Theme = 'light' | 'dark';

export type Page = 'Dashboard' | 'Performance' | 'Training' | 'Equipment';

export enum EquipmentStatus {
    Good = 'Good',
    DueSoon = 'Due Soon',
    Overdue = 'Overdue',
}

export interface EquipmentItem {
    name: string;
    purchaseDate: string;
    lastMaintenance: string;
    nextMaintenance: string;
    status: EquipmentStatus;
}
