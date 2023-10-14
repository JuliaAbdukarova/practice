import axios from 'axios'

export const addSession = (hash, user) => {
    return axios.post('http://localhost:3005/sessions', {
        hash,
        user,
    });
}
