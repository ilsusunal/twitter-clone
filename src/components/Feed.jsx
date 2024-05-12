import TweetBox from "./TweetBox";
import refreshIcon from '../../public/refresh-icon.svg';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {useQuery,} from '@tanstack/react-query'
import axios from "axios";

export default function Feed(){
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axios.get('https://twitter-clone-node.onrender.com/posts'),
      });
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

      console.log("POSTLAR:", data);

    return (
        <>
        <main className="col-span-7 lg:col-span-5 border-x mx-8 border-white/20">
            <header className="flex items-center border-b border-white/20 justify-around p-4  ">
                <a href="/home" className="hover:font-bold">For you</a>
                <a href="/home" className="hover:font-bold">Following</a>
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