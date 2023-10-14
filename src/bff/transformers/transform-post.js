export const transformPost = (dbPost) => {

    //console.log('transformPost:db', dbPost);

    const client = {
        id: dbPost.id,
        title: dbPost.title,
        imageUrl: dbPost.image_url,
        content: dbPost.content,
        publishedAt: dbPost.published_at,
    }
    //console.log('transformPost:client', client);

    return client;
}
