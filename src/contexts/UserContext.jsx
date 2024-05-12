import { createContext, useState } from "react";
import { LOCAL_STORAGE_USER_KEY } from "../constants";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const checkToken = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        if(token){
            const decoded = jwtDecode(token);
            console.log("USERRRR: ", decoded);
            return decoded;
        } else {
        console.log("USER YOK");
        return null;
        }
    }

    const [user, setUser] = useState(checkToken());

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}