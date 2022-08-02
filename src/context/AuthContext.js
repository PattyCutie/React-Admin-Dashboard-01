import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    currentUser : null
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE)

    //Local storage
    

    return (
        <AuthContext.Provider value={{ currentUser : state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}