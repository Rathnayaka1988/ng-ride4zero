export interface Journey {
    ride_count: number;
    timestamp: string;
    distance_m: number;
    duration_m: number;
    carbon_g: number;
    country: string;
}

export interface Total {
    ride_count: number;
    distance_m: number;
    carbon_g: number;
}