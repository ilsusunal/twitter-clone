export default function PostTweet(){
    return(
        <>
        <main className="flex border-b">
            <img src="https://picsum.photos/200/300" alt="" className="my-4 rounded-full mr-8 object-cover max-h-16"/>
            <div className="my-4 w-full">
                <input type="text" placeholder="Bla What's Happening?" className="text-xl bg-transparent flex-1 outline-none text-gray-600 min-h-24"/>
                <footer className='flex flex-row justify-between items-center my-4 border-t py-3'>
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