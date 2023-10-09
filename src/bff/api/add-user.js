import {generateDate} from "../utils"
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
}
