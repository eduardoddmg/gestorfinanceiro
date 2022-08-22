import { createContext, useState, useEffect } from 'react';
import { getTransaction, getUser } from '../utils';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {

	const [user, setUser] = useState('');
	const [jwt, setJwt] = useState('');
	const [id, setId] = useState('');
	const [transactions, setTransactions] = useState([]);

	const loginFirstRender = async () => {
		const sessionJwt = localStorage.getItem("jwt");
		if (sessionJwt) {
			setJwt(sessionJwt);
			const response = await getUser(sessionJwt);
			const data = response.data || {username: '', _id: ''};
			console.log(data);
			setUser(data.username);
			setId(data._id);
			getTransactionId(data._id);
			if (data.username) return true;
			else return false;
		}
		else return false;
	}

	useEffect(() => {
		loginFirstRender();
	}, []);

	const login = async (username, id, jwtToken) => {
		setUser(username);
		setId(id);
		setJwt(jwtToken);
		localStorage.setItem("jwt", jwtToken);
		getTransactionId(id);
	};
	const logout = () => {
		setId('');
		setJwt('');
		setUser('');
		localStorage.setItem("jwt", "");
	};

	const getTransactionId = async(id) => {
		const resp = await getTransaction(id);
		setTransactions(resp.data.data);
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
		<userContext.Provider value={{ user, id, transactions, login, logout, Total, loginFirstRender, getTransactionId }}>
			{children}
		</userContext.Provider>
	);
}