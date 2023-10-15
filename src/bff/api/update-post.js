//TODO: этот метод не сохраняет! Надо разобраться

import axios from 'axios'

export const updatePost = ({id, imageUrl, title, content}) =>
{
    //console.log('updatePost id ', id)
    //console.log('updatePost imageUrl ',  imageUrl)
    //console.log('updatePost title ',  title)

    return axios.patch(`http://localhost:3005/posts/${id}`,
        {
            image_url: imageUrl,
            title,
            content
        }
    ).then((response) => {
        //console.log('updatePost response ', response) ;
        return JSON.stringify(response['data']);
    });
    /*
    fetch(`http://localhost:3005/posts/${id}`, {

        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=utf-8;',
        },

        body: JSON.stringify ( {
                image_url: imageUrl,
                title,
                content
            }),
});
*/
}
