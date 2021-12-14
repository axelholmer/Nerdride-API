export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface RideInfo {
  ride_id: string;
  distance: number;
  duration: any;
  discharge: number;
  max_current: number;
  min_current: number;
  start_date: Date;
  end_date: Date;
}

export interface stats {
  ride_count: string;
  total_duration: any;
  total_distance: number;
}

export interface statsMonthly {
  total_duration: any;
  total_distance: number;
  date: Date;
}

