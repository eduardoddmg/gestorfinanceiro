import { createContext, useState, useEffect } from 'react';
import { getTransaction } from '../utils';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {

	const [user, setUser] = useState('');
	const [idUser, setIdUser] = useState('');
	const [transactions, setTransactions] = useState(null);

	const login = async (username, id) => {
		setUser(username);
		setIdUser(id);
		const resp = await getTransaction(id);
		console.log(id);
		setTransactions(resp.data.data);
		console.log(resp);
	};
	const logout = () => {
		setUser('');
		setIdUser('');
	};

	const addTransaction = (data) => {
		setTransactions([...transactions, data]);
	}

	return (
		<userContext.Provider value={{ user, idUser, transactions, addTransaction, login, logout }}>
			{children}
		</userContext.Provider>
	);
}