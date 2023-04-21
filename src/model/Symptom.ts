export interface Symptom {
    id: number,
    description: string,
    intensity?: Intensity
}

export enum Intensity {
    LOW = 0,
    MODERATE = 1,
    HIGH = 2
}