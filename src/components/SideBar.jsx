import mainPageIcon from '../../public/x-logo.svg';

export default function SideBar(){

    return (
        <>
        <a href="/"><img src={mainPageIcon} alt="" className='fill-white'/></a>
        {/* buraya mapli linkler gelecek*/}
        <div className='felx flex-col'>
            <a href="">Bla</a>
            <a href="">Bla</a>
            <a href="">Bla</a>
        </div>
        <button className="px-6 py-2 w-full rounded-full bg-sky-500 hover:bg-sky-700">Post</button>
        </>
    )
}