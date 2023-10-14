import {generateDate} from "../utils"
import axios from 'axios'

export const addComment =  (userId, postId, content) =>
{
    console.log('addComment', userId, postId, content)

    return axios.post('http://localhost:3005/comments', {
        author_id: userId,
        post_id: postId,
        published_at: generateDate(),
        content: content,
    });
}
