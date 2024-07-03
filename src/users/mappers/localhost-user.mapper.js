import { User } from "../models/user"
/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,

    } = localhostUser

    return new User({
        id       : id,
        isActive : isActive,
        balance  : balance,
        avatar   : avatar,
        firstName: first_name,
        lastName : last_name,
        gender   : gender,
    })
}