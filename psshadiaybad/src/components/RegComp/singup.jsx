import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscClose } from "react-icons/vsc"

function Singup() {
    return (
        <>
            <div className='absolute top-2 left-[40%] bg-gray-600 w-40 md:w-60 lg:w-80 h-80 border border-black rounded-md shadow-md shadow-orange-500 '>
                <div className='flex flex-col gap-2 m-4 mt-8 justify-center'>
                    <h4 className='text-white'>REGISTRATION FORM</h4>
                    <NavLink to={"/"} className='text-2xl absolute right-1 top-1 cursor-pointer hover:text-yellow-500'><VscClose/></NavLink>
                    <input type="email" className='text-black rounded-sm h-8' />
                    <input type="password" className='text-black rounded-sm h-8'/>
                    <input type="password" className='text-black rounded-sm h-8'/>
                    <div className=' flex flex-col justify-between mt-4 gap-1 text-white'>
                        <button className='bg-blue-800 p-1 px-2 border rounded-lg mx-3'>SingUp</button>
                        <span className='text-green-500 font-extralight font-mono'>if already singup </span>
                        <NavLink to={"/login"}><button className=' bg-white text-black border border-black px-3 rounded-md'>Loging</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singup
