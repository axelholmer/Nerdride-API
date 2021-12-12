import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    user_id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'user_id'>

export type FilterUsersDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}