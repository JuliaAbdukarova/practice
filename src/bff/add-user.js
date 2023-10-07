import {generateDate} from "./generate-date"
import axios from 'axios'

export const addUser =  (login, password) =>
{
    return axios.post('http://localhost:3005/users', {
        id: '',
        login: login,
        password: password,
        registered_at: generateDate(),
        role_id: 2,
    }).then((response) => response['data']);


    /*    .then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });

    */



/*    console.log(login, password)

    return  fetch("http://localhost:3005/users",{
            method:'POST',

            headers: {
                "Content-Type": "application/json;",
            },

            body: {
                login: login,
                password: password,
                registered_at: generateDate(),
                role_id: 2,
            }

        });
*/
}

/*
 JSON.stringify()
 */
