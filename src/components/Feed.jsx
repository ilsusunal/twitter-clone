import PostTweet from "./PostTweet";
import refreshIcon from '../../public/refresh-icon.svg';

export default function Feed(){
    return (
        <>
        <main className="px-8 col-span-5">
            <header className="flex items-center justify-around my-3 pb-3 border-b ">
                <a href="/" className="hover:font-bold">For you</a>
                <a href="" className="hover:font-bold">Following</a>
                <img onClick="" className="w-8 h-8 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "src={refreshIcon} alt="refresh" />
            </header>
            <div className="my-3">
                <PostTweet/>
            </div>
            <div className="my-3">
                FEED
            </div>
        </main>
        
        </>
    )
}