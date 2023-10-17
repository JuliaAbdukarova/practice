import {transformPost} from '../transformers'

export const getPost = async (postId) =>
{
    //const url = `http://localhost:3005/posts?id=${postId}`;
    //console.log('getPost', url);

  return fetch(`http://localhost:3005/posts?id=${postId}`)
        .then((res)=>{
           //return Promise.reject('Такая страница не существует');

            if (res.ok) {
                 return res;
            }
            const error =
                 res.status === 404
                    ? 'Такая страница не существует'
                    : 'Что-то пошло не так. Попробуйте еще раз позднее'

            return Promise.reject(error);

        })
        .then((loadedPost)=>
                    {
                        console.log('getPost RES', loadedPost);
                        return loadedPost.json()
                    }
        )
        .then(([loadedPost]) => loadedPost && transformPost(loadedPost));
    }
