import React from 'react'
import Sho from './sho/sho'
import { NavLink, Outlet } from 'react-router-dom'

function Adminpage() {
    return (
        <>
            <div className='min-h-[40rem] bg-teal-500 flex  max-w-full'>
                
                <div className=' relative min-w-[15rem] '>
                    <div className='text-start ml-4 text-2xl text-blue-800'>Admin</div>
                    <ul className='text-start mx-4 mt-4 text-slate-900 font-semibold font-serif'>
                        
                        <NavLink to={"/admin/sho"} className={({isActive})=>isActive ? "text-yellow-400" : ""}><li className='hover:text-blue-800 cursor-pointer border-2 border-teal-300 shadow-md p-2  hover:bg-teal-400'>SHO</li></NavLink>
                        <NavLink to={"/admin/members"} className={({isActive})=>isActive ? "text-yellow-400" : ""}><li className='hover:text-blue-800 cursor-pointer border-2 border-teal-300 shadow-md p-2 hover:bg-teal-400'>Members</li></NavLink>
                        <NavLink to={"/admin/mpphoto"} className={({isActive})=>isActive ? "text-yellow-400" : ""}><li className='hover:text-blue-800 cursor-pointer border-2 border-teal-300 shadow-md p-2 hover:bg-teal-400'>Main Page Photo</li></NavLink>
                        <NavLink to={"/admin/ets"} className={({isActive})=>isActive ? "text-yellow-400" : ""}><li className='hover:text-blue-800 cursor-pointer border-2 border-teal-300 shadow-md p-2 hover:bg-teal-400'>etc</li></NavLink>
                    </ul>
                </div>
                <div className='bg-teal-400 bg-gradient-to-t from-yellow-300 grow font-bold'>
                    <div className='font-bold border-2 border-teal-300 shadow-md'>Panel</div>
                    {/* <Sho/> */}
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Adminpage
