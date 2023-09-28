import {getUser} from "./get-user"
import {addUser} from "./add-user"
import {createSession} from './create-session'

export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin);

        if (!user) {
            return {
                error: "Логин не найден",
                res: null
            }
        }

        if (authPassword !== user.password) {
            return {
                error: "Неверный пароль",
                res: null
            }
        }



        return {
            error: null,
            res: createSession(user.role_id)
        }

    },
    async registration(regLogin, regPassword) {
        const user = await getUser(regLogin);

        if (user) {
            return {
                error: "Логин уже существует",
                res: null
            }
        }

        await addUser(regLogin, regPassword)

        return {
            error: null,
            res: createSession(user.role_id)
        }
   }
};
