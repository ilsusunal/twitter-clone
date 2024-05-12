import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function PostTweet(){
    const {user} = useContext(UserContext);
    return(
        <>
        <main className="flex mx-8">
            <img src={user.avatar} alt="" className="mr-4 mt-4 rounded-full object-cover h-14 w-14"/>
            <div className="my-4 w-full">
                <input type="text" placeholder="What's Happening?" className="text-xl bg-transparent flex-1 outline-none text-gray-600 min-h-24"/>
                <footer className='flex flex-row justify-between items-center border-t border-white/20 py-3'>
                    <div className="flex flex-row">
                        <p className="mr-4">Bla</p>
                        <p>Bla</p>
                    </div>
                    <button onClick="" className="px-1 py-1 w-16 rounded-full bg-sky-500 hover:bg-sky-700">
                    Post
                    </button>
                </footer>
            </div>
        </main>
        </>
    )
}