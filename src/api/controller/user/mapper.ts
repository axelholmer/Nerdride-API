import {LifetimeData, MonthlytData, RideInfo, User} from '../../interfaces'

export const toUser = (user: any): User => {
    return {
        user_id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    }
}

export const toRideInfo = (ride: any): RideInfo => {
    return {
       
        ride_id: ride.ride_id,
        distance: ride.distance,
        duration: ride.duration,
        discharge: ride.discharge,
        max_current: ride.max_current,
        min_current: ride.min_current,
        start_date: ride.start_date,
        end_date: ride.end_date
    }
}

export const toStats = (data: any): LifetimeData => {
    return {
        ride_count: data.ride_count,
        total_duration: data.total_duration,
        total_distance: data.total_distance,
    }
}

export const toStatsMonthly = (data: any): MonthlytData => {
    return {
        total_duration: data.total_duration,
        total_distance: data.total_distance,
        date: data.date
    }
}