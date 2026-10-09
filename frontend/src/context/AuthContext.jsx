import {createContext, useEffect, useReducer } from "react";

const getSavedValue = (key) => {
try {
const value = localStorage.getItem(key);
return value ? JSON.parse(value) : null;
} catch (error) {
console.error(`Failed to read ${key}:`, error);
return null;
}
};

const initialState = {
    user: getSavedValue('user'),
    role: getSavedValue('role'),
    token: getSavedValue('token'),
}

export const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START': 
        return {
            user: null,
            role: null,
            token: null
        };  

        case 'LOGIN_SUCCESS':
            return {
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role
            }
        case 'LOGOUT': 
        return {
            user: null,
            role: null,
            token: null
        };  

        default:
            return state;
    } 
};

export const AuthContextProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
    const saveValue = (key, value) => {
        if (value == null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    saveValue('user', state.user);
    saveValue('token', state.token);
    saveValue('role', state.role);
}, [state]);


    return <AuthContext.Provider value={{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
        </AuthContext.Provider>
}