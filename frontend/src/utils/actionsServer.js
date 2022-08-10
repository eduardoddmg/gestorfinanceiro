import axios from 'axios';
import validator from 'validator';

export async function postServer(url, body) {
    const response = await axios.post(url, body);
    return response;
}

export async function registerUser(body) {
    const resp = await postServer('https://finances-app-backend.herokuapp.com/api/auth/createUser', body);
    console.log(resp);
}