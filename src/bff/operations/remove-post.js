import { deletePost, getComments,deleteComment } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions"

export const removePost = async (hash, id) => {

    const accessRoles = [ROLE.ADMIN]

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: "Доступ запрещен.",
            res: null,
        }
    }
    console.log('removePost id = ',id)

    await deletePost(id);

    const comments = await getComments(id);

    await Promise.all(comments.map(({id:commentId})=> deleteComment(id, commentId)));

    return {
        error: null,
        res: true,
    };
};
