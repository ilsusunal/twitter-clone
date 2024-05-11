import TweetBox from "./TweetBox";
import refreshIcon from '../../public/refresh-icon.svg';

export default function Feed(){
    return (
        <>
        <main className="col-span-7 lg:col-span-5 mx-4 border-x">
            <header className="flex items-center  justify-around pb-3 border-b mt-3">
                <a href="/" className="hover:font-bold">For you</a>
                <a href="" className="hover:font-bold">Following</a>
                <img onClick="" className="w-8 h-8 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "src={refreshIcon} alt="refresh" />
            </header>
            <div className="">
                <TweetBox/>
            </div>
            <div className="border-t">
                FEED
            </div>
        </main>
        
        </>
    )
}