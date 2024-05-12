import mainPageIcon from '../../public/x-logo2.svg';
import featherIcon from '../../public/feather.svg';
import homeIcon from '../../public/house-fill.svg';
import exploreIcon from '../../public/magnifying-glass.svg';
import notificationsIcon from '../../public/bell.svg';
import profileIcon from '../../public/user.svg';
import ProfileSection from './ProfileSection';

export default function SideBar(){
    
    const optionsData =[
        {icon: mainPageIcon, text: " ", link: "/home"},
        {icon: homeIcon, text: "Home", link: "/home"},
        {icon: exploreIcon, text: "Explore", link: "/home"},
        {icon: notificationsIcon, text: "Notifications", link: "/home"},
        {icon: profileIcon, text: "Profile", link: "/profile"},
    ]

    return (
        <>
        <main className='col-span-2 flex flex-col'>
            <div className='my-4 '>  
                {optionsData.map((option, index) => (
                <div key={index} className='flex flex-row items-center hover:bg-zinc-800 p-4 w-full rounded-full'>
                    <img src={option.icon} alt={option.text} className='h-8'/>
                    <a href={option.link} className='ml-4 hidden md:inline lg:text-xl lg:font-medium'>{option.text}</a>
                </div>
                ))}
            </div>
            <button onClick="" className="h-8 w-8 lg:hidden rounded-full bg-sky-500 hover:bg-sky-700"><img src={featherIcon} alt="Post" className='flex items-center fill-white'/></button>
            <button onClick="" className="px-6 py-2 w-full h-14 rounded-full hidden lg:inline bg-sky-500 hover:bg-sky-700 lg:text-xl lg:font-medium">Post</button>
            <section className='my-8 hover:bg-zinc-800 p-2 w-full rounded-full'>
                <ProfileSection/>
            </section>
        </main>
        
        </>
    )
}