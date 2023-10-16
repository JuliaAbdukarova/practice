export const transformPost = (dbPost) => {

    const client = {
        id: dbPost.id,
        title: dbPost.title,
        imageUrl: dbPost.image_url,
        content: dbPost.content,
        publishedAt: dbPost.published_at,
    }

    return client;
}
