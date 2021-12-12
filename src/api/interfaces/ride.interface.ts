export interface Ride {
  user_id: string;
  ride_id: string;
  date: number;
  speed?: number;
  voltage?: number;
  pwm?: number;
  current?: number;
  power?: number;
  battery_level?: number;
  total_mileage?: number;
  temperature?: number;

  // timestamps!
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
