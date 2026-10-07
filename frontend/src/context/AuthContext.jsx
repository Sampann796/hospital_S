import {createContext, useContext, useEffect, useReducer } from "react";

const getSavedUser = () => {
try {
const user = localStorage.getItem("user");
return user ? JSON.parse(user) : null;
} catch (error) {
console.error("Failed to read saved user:", error);
return null;
}
};

const initialState = {
    user: getSavedUser(),
    role: JSON.parse(localStorage.getItem('role') || 'null'),
    token: JSON.parse(localStorage.getItem('token') || 'null'),
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
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', JSON.stringify(state.token));
        localStorage.setItem('role', JSON.stringify(state.role));
    },[state])


    return <AuthContext.Provider value={{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
        </AuthContext.Provider>
}