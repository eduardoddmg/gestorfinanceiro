import { createContext, useState } from 'react';

export const userContext = createContext({});

export const UseAuth = ({ children }) => {
	const [user, setUser] = useState('');

	const changeUsername = (username) => setUser(username);

	return (
		<userContext.Provider value={{user, changeUsername}}>
			{children}
		</userContext.Provider>
	);
}