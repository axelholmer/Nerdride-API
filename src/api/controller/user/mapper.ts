import {User} from '../../interfaces'
import {UserOuput} from '../../../db/models/User'

export const toUser = (user: UserOuput): User => {
    return {
        user_id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    }
}