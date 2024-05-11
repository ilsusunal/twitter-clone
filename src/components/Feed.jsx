import PostTweet from "./PostTweet"

export default function Feed(){
    return (
        <>
        <header className="flex justify-around my-3">
            <a href="/">For you</a>
            <a href="">Following</a>
        </header>
        <div className="my-3">
            <PostTweet/>
        </div>
        <div className="my-3">
            FEED
        </div>
        </>
    )
}