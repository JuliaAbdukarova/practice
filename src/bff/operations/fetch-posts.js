import { getComments, getPosts } from "../api";

import { getCommentsCount } from "../utils";

export const fetchPosts = async (searchPhrase, page, limit) => {
    const comments = await getComments();
    const {posts, links} = await getPosts(searchPhrase, page, limit);

    return {
        error: null,
        res: {
            posts: posts.map((post)=> ({
                                ...post,
                                commentsCount: getCommentsCount(comments, post.id),
                    })),
            links,
         },
    };
}
