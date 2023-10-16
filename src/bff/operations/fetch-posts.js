import { getComments, getPosts } from "../api";

import { getCommentsCount } from "../utils";

export const fetchPosts = async () => {

    const comments = await getComments();
    const posts = await getPosts();

    return {
        error: null,
        res: posts.map((post)=> ({
            ...post,
            commentsCount: getCommentsCount(comments, post.id),
        })),
    };
}
