import axios from 'axios';

export async function registerUser(body) {
    try {
        const { username, email, password } = body;
        const resp = await axios.post('https://finances-app-backend.herokuapp.com/api/auth/createUser', { username, email, password });
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}