import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// alias component that holds the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// the Provider component you want to use to wrap another component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            console.log(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};