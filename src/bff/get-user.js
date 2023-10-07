export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3005/users?login=${loginToFind}`)
    .then((loadedUser)=>loadedUser.json())
    .then(([loadedUser]) => loadedUser);

/*
export const getUser = async (loginToFind) => {
    const users = await getUsers();
    //console.log(users);
    const usr = users.find(({login}) => login === loginToFind)
    //console.log(usr);
    return usr; //users.find(({login}) => login === loginToFind)
}
*/
