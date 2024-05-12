import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_USER_KEY } from "../constants"

export default function ProfileSection(){

    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        setTimeout(() => { history.push("/");}, 4000);
    }
    return (
        <>
        <main className="flex items-center">
            <img src="https://picsum.photos/200/300" alt="" className="my-4 rounded-full mr-8 object-cover w-10 h-10"/>
            <div className>
                <p>fullName</p>
                <p>@userName</p>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </main>
        </>
    )
}