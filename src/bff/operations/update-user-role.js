import { updateUser } from "../api";
import {ROLE} from '../constants'
import { sessions } from "../sessions"

export const  updateUserRole = async (hash, userId, newUserRoleId) => {

    const accessRoles = [ROLE.ADMIN]

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: "Доступ запрещен.",
            res: null,
        }
    }

    updateUser(userId, newUserRoleId);

    return {
        error: null,
        res: true
    }
}
