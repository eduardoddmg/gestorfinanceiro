import { createContext, useState, useCallback } from 'react';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {
	const [user, setUser] = useState('');
	const [userId, setUserId] = useState('');

	const login = (username, id) => {
		setUser(username);
		setUserId(id);
	};
	const logout = () => {
		setUser('');
		setUserId('');
	};

	return (
		<userContext.Provider value={{ user, login, logout }}>
			{children}
		</userContext.Provider>
	);
}