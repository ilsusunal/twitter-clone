import axios from 'axios';
import mainPageIcon from '../../public/x-logo2.svg';
import { useForm } from "react-hook-form";

export default function SignUpModal({closeModal}) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
        axios.post("https://twitter-clone-node.onrender.com/users/signup", data)
        .then(
            (response) => {
                console.log(response)
            })
        .catch((error) => {
                console.log(error)
            })
        .finally(() => {
                console.log("register done.")
            });
    }

    return(
        <>
        <div className="bg-sky-700 bg-opacity-20 spew-screen h-screen fixed flex items-center inset-0">
        <div className="max-w-xl mx-auto px-6 py-6 bg-black rounded-xl fixed inset-0 inset-y-8">
            <header className='flex items-start'>
                <button onClick={() => {closeModal(false)}}>X</button>
                <img src={mainPageIcon} alt="X" className='max-w-8 mx-auto' />
            </header>
            <main className='px-16'>
            <h3 className='text-3xl font-semibold my-4'>Create your account</h3>
            <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
                <label className="form-line ">
                    <div className='flex justify-between items-end'>
                        {errors.fullname && <span className="error-message">This field is required!</span>}
                    </div>
                    <input {...register("fullname", { required: true })} type="text" placeholder="Name"/>
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>
                    <input {...register("email", 
                    { required: {value: true, message :"This field is required!"}, 
                    pattern :{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Invalid email address"} })} type="email" placeholder="Email"
                    />
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        {errors.password && <span className="error-message">This field is required!</span>}
                    </div>
                    <input {...register("password", { required: true })} type="password" placeholder="Password"/>
                </label>
                <label className="form-line mt-2">
                    <div className='flex justify-between items-end'>
                        {errors.username && <span className="error-message">This field is required!</span>}
                    </div>
                    <input {...register("username", { required: true })} type="text" placeholder="Username"/>
                </label>
                <button className="mt-12 px-6 py-2 w-full h-12 rounded-full hidden lg:inline bg-sky-500 hover:bg-sky-700 lg:text-xl lg:font-medium">Sign Up</button>
            </form>
            </main>
        </div>
        </div>
        </>
    )
}