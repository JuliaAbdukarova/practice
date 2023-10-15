export const deletePost = (id) =>
{
    console.log('deletePost id = ',id)
    fetch(`http://localhost:3005/posts/${id}`, {
        method: 'DELETE',
    });
}
