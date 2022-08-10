import axios from 'axios';

export async function registerUser(body) {
    try {
        const { username, email, password } = body;
        const resp = await axios.post('https://finances-app-backend.herokuapp.com/api/auth/createUser', { username, email, password });
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(body) {
    try {
        const { username, password } = body;
        const resp = await axios.get(`https://finances-app-backend.herokuapp.com/api/auth/loginUser?username=${username}&password=${password}`);
        return resp;
    } catch (error) {
        console.log(error);
    }
}