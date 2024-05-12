import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_USER_KEY } from "../constants";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProfileSection(){
    const {user} = useContext(UserContext);

    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        setTimeout(() => { history.push("/");}, 4000);
    }
    return (
        <>
        <main className="flex items-center">
            <img src={user.avatar} alt="" className="my-4 rounded-full mr-8 object-cover w-10 h-10"/>
            <div className>
                <p>{user.fullname}</p>
                <p>@{user.username}</p>
            </div>
            <button onClick={() => handleLogout()}>Log Out</button>
        </main>
        </>
    )
}