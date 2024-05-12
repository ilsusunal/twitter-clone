import { createContext } from "react";
import { LOCAL_STORAGE_USER_KEY } from "../constants";
import { jwtDecode } from "jwt-decode";

export const userContext = createContext();

export const UserContextProvider = ({children}) => {
    const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if(token){
        //tokendan user bilgisini al
        const decoded = jwtDecode(token);
    } else {
        //setUser(null)
        console.log("USER YOK")
    }

    return(
        <UserContextProvider value={{}}>
            {children}
        </UserContextProvider>
    )
}