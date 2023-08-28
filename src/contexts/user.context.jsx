import { createContext, useState } from "react";

// alias component that holds the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// the Provider component you want to use to wrap another component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};