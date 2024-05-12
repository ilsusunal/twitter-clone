import mainPageIcon from '../../public/x-logo2.svg';

export default function SignUpModal() {

    return(
        <>
        <div className="max-w-sm mx-auto p-6 bg-zinc-800 rounded-2xl">
            <img src={mainPageIcon} alt="X" className='max-w-4 mx-auto' />
            <h3 className='text-xl font-semibold my-4'>Create your account</h3>
            <form className="flex flex-col gap-4 ">
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        <span className="form-label">Full Name</span>
                        <span className="error-message">This area can not be empty!</span>
                    </div>
                    <input type="text" placeholder="Enter your full name."/>
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        <span className="form-label">Email</span>
                        <span className="error-message">This area can not be empty!</span>
                    </div>
                    <input type="email" placeholder="Enter your email."/>
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        <span className="form-label">Password</span>
                        <span className="error-message">This area can not be empty!</span>
                    </div>
                    <input type="password" placeholder="Enter a password."/>
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        <span className="form-label">User Name</span>
                        <span className="error-message">This area can not be empty!</span>
                    </div>
                    <input type="text" placeholder="Enter your full name."/>
                </label>
                <label className="form-line mt-2">
                    <span className="form-label">Avatar</span>
                    <input type="url" placeholder="Enter your full name."/>
                </label>
                <button className="mt-8 px-6 py-2 w-48 h-12 rounded-full hidden lg:inline bg-sky-500 hover:bg-sky-700 lg:text-xl lg:font-medium">Sign Up</button>
            </form>
        </div>
        <h1>Modal</h1>
        </>
    )
}