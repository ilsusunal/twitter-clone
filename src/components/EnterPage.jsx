import { useState } from 'react';
import mainPageIcon from '../../public/x-logo2.svg';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

export default function EnterPage(){
    const [sUpModal, setSUpModal] = useState(false);
    const [sInModal, setSInModal] = useState(false);
    
    return(
        <>
        <main className='col-span-9 p-12 flex flex-col lg:flex-row lg:items-center justify-around '>
            <section className='w-8 lg:w-1/2 '>
                <img src={mainPageIcon} alt="X" />
            </section>
            <section className='py-18'>
                <h1 className='text-4xl lg:text-6xl font-black'>Happening now</h1>
                <h3 className='text-2xl lg:text-4xl font-bold mt-16'>Join today.</h3>
                {sUpModal && <SignUpModal closeModal={setSUpModal}/>}
                {sInModal && <SignInModal closeModal={setSInModal}/>}
                <button onClick={() => {setSUpModal(true)}} className="mt-8 px-6 py-2 w-48 h-12 rounded-full  bg-sky-500 hover:bg-sky-700 lg:text-xl lg:font-medium">
                    Create Account
                    </button>
                <h3 className='text-xl font-semibold mt-16 mb-4'>Already have an account?</h3>
                <button onClick={() => {setSInModal(true)}} className="mt-4 px-6 py-2 w-48 h-12 rounded-full  bg-zinc-800 hover:bg-black hover:border border-solid border-white lg:text-xl lg:font-medium">Sign In</button>
            </section>
        </main>
        <footer className='flex justify-between col-span-9'>
            <a href="">About</a>
            <a href="">Terms of Service</a>
            <p>@2024 İlsu</p>
        </footer>
        
        </>
    )
}