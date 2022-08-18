import axios from 'axios';

export async function registerUser(body) {
    try {
        const { username, email, password } = body;
        console.log('1');
        const resp = await axios.post('https://finances-app-backend.herokuapp.com/api/auth/createUser', { username, email, password });
        console.log('2');
        return resp;
    } catch (error) {
        return error;
    }
}

export async function loginUser(body) {
    try {
        const { username, password } = body;
        const resp = await axios.get(`https://finances-app-backend.herokuapp.com/api/auth/loginUser?username=${username}&password=${password}`);
        return resp;
    } catch (error) {
        return error;
    }
}

export async function createTransaction(body) {
    const { transacao_tipo, item_name, item_value, item_description, idUser } = body; 
    try {
        const resp = await axios.post('https://finances-app-backend.herokuapp.com/api/transaction/createTransaction', {
            typeTransaction: transacao_tipo,
            valueTransaction: item_value,
            nameItemTransaction: item_name,
            descriptionItemTransaction: item_description,
            idUser,
        });
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function getTransaction(idUser) {
    try {
        console.log(idUser);
        const resp = await axios.get(`https://finances-app-backend.herokuapp.com/api/transaction/getTransaction?idUser=${idUser}`);
        return resp;
    } catch (error) {
        console.log(error);
    }
}