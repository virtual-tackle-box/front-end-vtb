import { createContext, useContext, useReducer, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
	const [userID, setUserID] = useState("");
	const [catches, setCatches] = useState('')

	const value = {
		userID,
		setUserID,
		catches,
		setCatches,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
	const userData = useContext(UserContext);
	if (!userData) {
		throw new Error(
			"useUserContext can only be used within UserContextProvider"
		);
	}
	return userData;
}
