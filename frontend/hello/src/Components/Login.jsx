// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    return (
        <>

            <div className=' h-full w-screen'>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        
                        <div className=' items-center  text-center '>
                            <h3 className="font-bold text-2xl">Login</h3>

                            <h1 className='mt-4 text-black'>Email</h1>
                            <input className='border rounded-md text-center outline-none' type='Email' placeholder='Enter Email ' {...register("Email", { required: true })}></input>

                            <h1  className='mt-4 text-black'>Password</h1>
                            <input className='border rounded-md text-center outline-none' type='Password' placeholder='Enter Password' {...register("Password", { required: true })}></input>

                            <br></br>
                            <button className='mt-4 bg-pink-600 h-8 w-20 rounded-md text-white hover:bg-pink-700'>Login</button>
                           <br />
                            <span className=' '>Don't Have Account? </span>{" "}
                            <Link to = '/signup' className='text-pink-500 hover:text-pink-700' href=' ' >Sign'up</Link>{" "}
                        </div>
                    </div>
                </dialog>

            </div>


        </>
    )
}

export default Login