// eslint-disable-next-line no-unused-vars
import React from 'react'

import Login from './Login'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>

            <div className='flex h-screen justify-center items-center text-center  '>

                <div className=" ">
                    <div className=" modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link>
                        </form>

                        <div className=' items-center  text-center '>
                            <h3 className="font-bold text-2xl">Sinup</h3>

                            <h1 className='mt-4 text-black'>Name</h1>
                            <input className='border rounded-md text-center outline-none' type='Name' placeholder='Enter Full Name'></input>

                            <h1 className='mt-4 text-black'>Email</h1>
                            <input className='border rounded-md text-center outline-none' type='Email' placeholder='Enter Email'></input>

                            <h1 className='mt-4 text-black'>Password</h1>
                            <input className='border rounded-md text-center outline-none' type='Password' placeholder='Enter Password'></input>

                            <br></br>
                            <button className='mt-4 bg-pink-600 h-8 w-20 rounded-md text-white hover:bg-pink-700'>Signup</button>
                            <br />
                            <span className=' '>Have Account? </span>{" "}
                            <button className='text-pink-500 hover:text-pink-700' href=' ' 
                               onClick={() =>
                                document.getElementById("my_modal_3").showModal()
                               }
                            >Login</button>{" "}

                        </div>
                        <Login/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp