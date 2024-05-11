import exploreIcon from '../../public/magnifying-glass.svg';

export default function Widgets(){

    const trendData =[
        {location: "Trending in Turkey", subject: "#Bi'şey", postNumber: 10},
        {location: "Trending in World", subject: "#Bi'şey2", postNumber: 50},
        {location: "Trending in Somewhere", subject: "#Bi'şey3", postNumber: 300},
        {location: "Trending in Turkey", subject: "#Bi'şey4", postNumber: 50},
    ]

    return (
        <>
        <main className='col-span-2 hidden lg:inline'>
            <div className="flex items-center space-x-2 mt-3 px-3 w-full rounded-full bg-zinc-800 hover:bg-black hover:border border-solid border-white">
                <img src={exploreIcon} alt="Search" className='w-6 h-8'/>
                <input type="text" placeholder="Search" className="bg-transparent flex-1 outline-none text-gray-600"/>
            </div>
            <div className="my-8 flex flex-col rounded-2xl px-2 py-1 border border-solid border-white">
                <p>Trends For You</p>
                {trendData.map((option, index) => (
                    <div key={index} className='flex flex-col cursor-pointer my-3 hover:bg-gray-900'>
                        <p className='text-xs text-gray-600'>{option.location}</p>
                        <a className="font-bold py-1" href="">{option.subject}</a>
                        <p className='text-xs text-gray-600'>{option.postNumber}</p>
                    </div>                  
                ))} 
            </div>
        </main>
        
        </>
    )
}