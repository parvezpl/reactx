import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscClose } from "react-icons/vsc"
function Login() {

    return (
        <>
        <div className='absolute top-2 left-[40%] inline-table bg-gray-600 w-40 md:w-60 lg:w-80 h-80 border border-black rounded-md shadow-md shadow-orange-500 '>
            <div className=' bg-gray-600 h-full w-full overflow-hidden'>
                <div className='m-2'>
                    <h1 className='text-white'>LOG IN</h1>
                    <NavLink to={"/"} className='text-2xl absolute right-1 top-1 cursor-pointer hover:text-yellow-500'><VscClose/></NavLink>
                    <div className='flex flex-col gap-2 m-4 mt-8 justify-center'>
                        <input type="email" className='text-black rounded-sm h-8' />
                        <input type="password" className='text-black rounded-sm h-8'/>
                        <div className=' inline-table mt-3'>
                            <div className='flex flex-col items-center gap-4 text-white '>
                                <button className=' bg-blue-800 p-1 w-20 h-8 border rounded-lg'>login</button>
                                <button className='p-1 px-2 border rounded-lg mx-3 text-sm sm:text-base'>forget password</button>
                                <NavLink to={"/singup"}> 
                                    <button className='p-1 px-2 border rounded-lg mx-3 text-sm sm:text-base'>Registation</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> 
    )
}

export default Login
