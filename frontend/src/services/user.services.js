import Axios from 'axios'

export {
    login,
    logout,
    getAll
}

async function login(username, password) {
    const requestOptions = {
        method: 'GET',
        url: 'http://localhost:8000/user/authenticate',
        params: {
            username,
            password
        }
    }

    return await Axios(requestOptions)
        
}

function logout() {
    localStorage.removeItem('user')
}



function getAll() {
    // const requestOptions = {
    //     method: 'GET',
    //     headers: authHeader()
    // }
    return Axios.get('http://localhost:1323/users')
}