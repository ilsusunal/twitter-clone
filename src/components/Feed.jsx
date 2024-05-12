import TweetBox from "./TweetBox";
import refreshIcon from '../../public/refresh-icon.svg';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Feed(){
    const {user} = useContext(UserContext);
    return (
        <>
        <main className="col-span-7 lg:col-span-5 border-x mx-8 border-white/20">
            <header className="flex items-center border-b border-white/20 justify-around p-4  ">
                <a href="/" className="hover:font-bold">For you</a>
                <a href="" className="hover:font-bold">Following</a>
                <img onClick="" className="w-8 h-8 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "src={refreshIcon} alt="refresh" />
            </header>
            <div className="p-4">
                <TweetBox/>
            </div>
            <div className="border-t border-white/20 p-4">
                FEED
            </div>
        </main>
        
        </>
    )
}