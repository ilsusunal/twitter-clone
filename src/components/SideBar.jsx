import mainPageIcon from '../../public/x-logo.svg';
import homeIcon from '../../public/house-fill.svg';
import exploreIcon from '../../public/magnifying-glass.svg';
import notificationsIcon from '../../public/bell.svg';
import profileIcon from '../../public/user.svg';
import ProfileSection from './ProfileSection';

export default function SideBar(){
    
    const optionsData =[
        {icon: homeIcon, text: "Home", link: "/"},
        {icon: exploreIcon, text: "Explore", link: "/"},
        {icon: notificationsIcon, text: "Notifications", link: "/"},
        {icon: profileIcon, text: "Profile", link: "/"},
    ]

    return (
        <>
        <main className='col-span-2 flex flex-col'>
            <a href="/"><img src={mainPageIcon} alt="MainPage" className='fill-white px-8 mt-3'/></a>
            <div className='my-4 '>  
                {optionsData.map((option, index) => (
                <div key={index} className='flex flex-row items-center hover:bg-zinc-800 p-2 w-full rounded-full'>
                    <img src={option.icon} alt={option.text} />
                    <a href={option.link} className='ml-4 hidden md:inline'>{option.text}</a>
                </div>
                ))}
            </div>
            <button onClick="" className="px-6 py-2 w-full rounded-full bg-sky-500 hover:bg-sky-700">Post</button>
            <section className='my-8 hover:bg-zinc-800 p-2 w-full rounded-full'>
                <ProfileSection/>
            </section>
        </main>
        
        </>
    )
}