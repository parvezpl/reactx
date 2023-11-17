import React, { useEffect, useState } from 'react'
import { Login, Sidebar, Singup } from '../components'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Cctnspage from './homeComp/cctnspage'
import Subhome from './subhome'
// import PicPage from './picPage'


function Home() {
    const [regForm, setRegForm] = useState(true)
    const regbtnStatus = useSelector((state)=>state.regbtn)
    const sidebarStatus=useSelector((state)=>state.sidebartoogle)
    const homepagetoggle=useSelector((state)=>state.homepagetoggle)
    useEffect(()=>{
        setRegForm(true)
    },[regbtnStatus])
    return (
        <>
        <div className='relative flex h-auto bg-gray-400 '>
            <div className=''><Sidebar/></div>
            {/* // card logo */}  
            <div className={`hidden sm:inline-table ${!sidebarStatus && "md:hidden" }  absolute -top-0 left-0" bg-gray-600 p-1 h-auto w-[15rem] rounded-md text-white gap-1 border 
            shadow shadow-red-600 cursor-pointer`} onClick={()=>setRegForm(!regForm)}>
                <div className='flex'>
                    <div className='w-[6rem] h-[4.5rem] bg-red-400 p-1 rounded-md'>
                        <div className='flex justify-center items-center h-full w-full'>
                            log 
                        </div>
                    </div>
                    <NavLink to={"/admin"} >
                        <div className='flex justify-center w-full items-center h-full '>
                        <h1 className='flex flex-col text-sm text-yellow-200 items-center'>
                            <span className=' font-bold'>SHO PARVEZ ALAM</span>
                            <span className=' text-sm'>PS SHADIYABAD</span>    
                        </h1>
                        </div>
                    </NavLink>
                </div>
                
            </div>
            {/* // main home screen from here */}
            <Outlet/>
            <Subhome homepagetoggle={homepagetoggle}/>
            
        </div>
        </>
    )
}

export default Home
