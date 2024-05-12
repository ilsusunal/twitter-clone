import refreshIcon from '../../public/refresh-icon.svg';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function ProfilePage(){
    const {user} = useContext(UserContext);

    return (
        <>
        <main className="col-span-7 lg:col-span-5 border-x mx-8 border-white/20">
            <header className="flex items-center border-b border-white/20 justify-around p-4  ">
                <a href="/home" className="hover:font-bold">Back</a>
                <p>{user.fullname}</p>
                <img onClick="" className="w-8 h-8 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "src={refreshIcon} alt="refresh" />
            </header>
            <div className="">
                <img className='w-auto max-h-32' src="https://picsum.photos/id/10/500/500" alt="Profile Header" />
                <img src={user.avatar} alt="Profile Picture" className="mr-4 mt-4 rounded-full object-cover h-14 w-14"/>
                <p>{user.fullname}</p>
                <p>@{user.username}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec condimentum mauris, eu aliquet erat. Pellentesque molestie elementum vulputate. </p>
            </div>
            <div className="border-t border-white/20 p-4">
                FEED
            </div>
        </main>
        </>
    )
}