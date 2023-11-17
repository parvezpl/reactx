import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { homepageFn } from '../../store/authSlice';


function Header() {
    const [sendRequest, setSendRequest] = useState(false)
    const [btnStatus, setBtnStatus]=useState(false)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        if (sendRequest) {
            navigate("/")
            setSendRequest(false)
        }
    },[sendRequest])
        
    return (
        <>
            <nav className='flex bg-sky-800 h-8 text-white'>
                <div className='flex justify-between w-full items-center'>
                    <div className="ml-2 cursor-pointer hover:text-yellow-400" onClick={()=>{setSendRequest(true),dispatch(homepageFn(true))}}>SHO SHADADIYABAD</div>
                    <div className=''>PS SHADIYABAD DIST-GHAZIPUR</div>
                    <div >
                        <div className={`flex flex-col sm:flex-row gap-2 top-1 text-sm sm:text-base text-white px-1 ${btnStatus && "hidden"}`}>
                            <NavLink to={"/upload"} className='bg-green-600 cursor-pointer border px-1 rounded-md hover:bg-green-700' onClick={()=>dispatch(homepageFn(true))}>Upload Photo</NavLink>
                            <NavLink to={"/login"} className='bg-red-600 cursor-pointer border px-1 rounded-md hover:bg-green-700' onClick={()=>dispatch(homepageFn(true))}>SIGN IN</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
