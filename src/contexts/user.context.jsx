import {
    createContext,
    useEffect,
    useReducer
} from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase/firebase.utils";

// alias component that holds the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

// Business logic should not be handled in reducer
// payload should already contain the data you want updated
const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

const INITIAL_STATE = {
    currentUser: null
};

// the Provider component you want to use to wrap another component
export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = user =>
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};