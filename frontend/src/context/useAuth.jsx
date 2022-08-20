import { createContext, useState, useEffect } from 'react';
import { getTransaction, getUser } from '../utils';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {

	const [user, setUser] = useState('');
	const [jwt, setJwt] = useState('');
	const [id, setId] = useState('');
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const sessionJwt = localStorage.getItem("jwt");
		sessionJwt && getUser(sessionJwt) &&setJwt(sessionJwt);
	}, []);

	const login = async (username, id, jwtToken) => {
		setUser(username);
		setId(id);
		setJwt(jwtToken);
		localStorage.setItem("jwt", jwtToken);
		const resp = await getTransaction(id);
		setTransactions(resp.data.data);
	};
	const logout = () => {
		setId('');
		setJwt('');
		setUser('');
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
		<userContext.Provider value={{ user, id, transactions, addTransaction, login, logout, Total }}>
			{children}
		</userContext.Provider>
	);
}