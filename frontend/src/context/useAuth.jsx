import { createContext, useState, useCallback } from 'react';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {
	const [user, setUser] = useState('');
	const [idUser, setIdUser] = useState('');

	const login = (username, id) => {
		setUser(username);
		setIdUser(id);
	};
	const logout = () => {
		setUser('');
		setIdUser('');
	};

	return (
		<userContext.Provider value={{ user, idUser, login, logout }}>
			{children}
		</userContext.Provider>
	);
}