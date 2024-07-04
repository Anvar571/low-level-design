
export interface BaseModel {
    id?: number;
}

export enum TaskStatus {
    PENDING = 'pending',
    INPROGRESS = 'inprogress',
    COMPLETED = 'completed',
}

export enum TaskPriority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low',
}