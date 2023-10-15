import { updatePost } from "../api";
import {ROLE} from '../constants'
import { sessions } from "../sessions"

export const savePost = async (hash, newPostData) => {

    const accessRoles = [ROLE.ADMIN]

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: "Доступ запрещен.",
            res: null,
        }
    }

    const updatedPost = await updatePost(newPostData);
    //const result = resultJson.json();

    //console.log('updatePost ===', updatedPost)

    return {
        error: null,
        res: updatedPost
    }
}
