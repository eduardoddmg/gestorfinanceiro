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
        const resp = await axios.post(`https://finances-app-backend.herokuapp.com/api/auth/loginUser`, { username, password });
        return resp;
    } catch (error) {
        return error;
    }
}

export async function getUser(jwt) {
    try {
        const response = await axios.get('https://finances-app-backend.herokuapp.com/api/users/users', {headers: {'x-access-token': jwt}})
        return response;
    } catch (error) {
        return error;
    }
}

export async function createTransaction(body, jwt) {
    const { transacao_tipo, item_name, item_value, item_description, userId } = body; 
    try {
        const resp = await axios.post('https://finances-app-backend.herokuapp.com/api/transaction/createTransaction', {
            typeTransaction: transacao_tipo,
            valueTransaction: item_value,
            nameItemTransaction: item_name,
            descriptionItemTransaction: item_description,
            userId,
        }, {headers: {'x-access-token': jwt}});
        return resp;
    } catch (error) {
        return error;
    }
}

export async function getTransaction(userId, jwt) {
    try {
        console.log(userId);
        const resp = await axios.get(`https://finances-app-backend.herokuapp.com/api/transaction/getTransaction?userId=${userId}`, {headers: {'x-access-token': jwt}});
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function updateTransaction(data, jwt) {
    try {
        const { transacao_tipo, item_name, item_value, item_description, userId, _id } = data; 
        const resp = axios.put("https://finances-app-backend.herokuapp.com/api/transaction/updateTransaction",  {
            typeTransaction: transacao_tipo,
            valueTransaction: item_value,
            nameItemTransaction: item_name,
            descriptionItemTransaction: item_description,
            userId,
            _id
            }, { headers: {'x-access-token': jwt}});
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTransaction(id) {
    try {
        const resp = await axios.delete(`https://finances-app-backend.herokuapp.com/api/transaction/deleteTransaction?idTransaction=${id}`);
        return resp;
    } catch (error) {
        console.log(error);
    }
}