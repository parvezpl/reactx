import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarFn, homepageFn } from '../../store/authSlice'
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import CctnsOffice from './cctnsOffice';
import Box from './options/box';




function Sidebar() {
    const [sendRequest, setSendRequest] = useState(false)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const sidebarStatus=useSelector((state)=>state.sidebartoogle)
    const [condition, setCondition]= useState(false)
    const links =[
            {name:"CCTNS OFFICE", nav:"/cctnspage", cctns:condition && ""},
            {name:"MANUAL OFFICE", nav:"/cctns"},
            {name:"FORCE", nav:"/"},
            {name:"VILLAGE", nav:"/"},
            {name:"GRAM PRADHAN", nav:"/"},
            {name:"HISTORY", nav:"/"},
    ]

    useEffect(()=>{
        if (sendRequest) {
            navigate("/picpage")
            setSendRequest(false)
        }
    },[sendRequest])
        
    return (
        <>
            <div className={`inline-table relative bg-cyan-700 border border-yellow-500  h-full ${sidebarStatus ? "w-60" : "w-0"}`}>
                <button className={`absolute top-20 -left-3 bg-yellow-500 rounded-sm duration-800 border border-black shadow-lg shadow-red-500 hover:bg-green-600 -rotate-90 hover:rotate-0 duration-700  ${sidebarStatus && "hidden"}`} onClick={()=>dispatch(sidebarFn(true))}> Sidebar</button>
                <button className={`text-white bg-black h-6 w-6 text-2xl flex justify-center items-center rounded-full border border-black absolute -right-3 top-20 duration-400 hover:bg-black hover:text-yellow-500 hover:translate-y-180 ${!sidebarStatus && "hidden"}`} 
                            onClick={()=>dispatch(sidebarFn(false))}><BsArrowLeftCircleFill/></button>
                <div className={`mt-20 ${!sidebarStatus && "hidden"}`}>
                    <div className='border border-yellow-500 bg-cyan-600  font-bold p-2'>MENU</div>
                    <div className=''>
                        {/* <Box/> */}
                        <ul className='flex flex-col bg-cyan-700 text-center font-semibold overflow-auto '>
                            {links.map(link =>{
                                return <NavLink to={link.nav} key={link.name} className=' cursor-pointer p-2 border-1 border-gray-300 shadow-md hover:bg-stone-400 ' onClick={()=>{setCondition((prev)=>!prev), dispatch(homepageFn(false))}}>{link.name}{link.cctns}</NavLink>
                            })}
                            <li className=' cursor-pointer hover:text-blue-900 mt-4' onClick={()=>setSendRequest(true)}>pic page</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </> 
    )
}

export default Sidebar
