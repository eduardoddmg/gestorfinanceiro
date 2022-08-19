import { createContext, useState, useEffect } from 'react';
import { getTransaction } from '../utils';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {

	const [user, setUser] = useState('');
	const [jwt, setJwt] = useState('');
	const [id, setId] = useState('');
	const [transactions, setTransactions] = useState([]);

	const login = async (username, id, jwt) => {
		setUser(username);
		setId(id);
		setJwt(jwt);
		const resp = await getTransaction(id);
		console.log(id);
		setTransactions(resp.data.data);
	};
	const logout = () => {
		setId('');
		setJwt('');
		setUsername('');
	};

	const addTransaction = (data) => {
		setTransactions([...transactions, data]);
	}

	class Total {
		constructor() {
			this.entrada = 0;
			this.saida = 0;
			this.balanco = 0;
			this.transactions = transactions;
		}
		get entradaCalc() {
			return this.transactions.filter(item => item.typeTransaction === "entrada").reduce((sum, item) => sum+=item.valueTransaction,0);
		}
		get saidaCalc() {
			return this.transactions.filter(item => item.typeTransaction === "saida").reduce((sum, item) => sum+=item.valueTransaction,0);
		}
	}
	return (
		<userContext.Provider value={{ user, idUser, transactions, addTransaction, login, logout, Total }}>
			{children}
		</userContext.Provider>
	);
}