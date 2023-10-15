import {generateDate} from "../utils"
import axios from 'axios'

export const addPost=  ({imageUrl, title, content}) =>
{
    //console.log('addPost', imageUrl, title, content)

    return axios.post('http://localhost:3005/posts', {
        image_url: imageUrl,
        title,
        content,
        published_at: generateDate(),
    }).then((response) => response['data'])
   //  .then((createdPost) => createdPost.json());
}
