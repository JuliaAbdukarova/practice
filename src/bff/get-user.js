import {getUsers} from "./get-users"

export const getUser = async (loginToFind) => {
    const users = await getUsers();
    //console.log(users);
    const usr = users.find(({login}) => login === loginToFind)
    //console.log(usr);
    return usr; //users.find(({login}) => login === loginToFind)
}
