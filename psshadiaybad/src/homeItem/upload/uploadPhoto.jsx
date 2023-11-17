import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import storeService from '../../utility/storage';




function UploadPhoto() {
    const [filedata, setFiledata]=useState(null)
    const [addFileData, setAddFileData]=useState([])
    const [priew, setPriew]=useState(null)
    const [uploadStatus, setuploadStatus]=useState(true)
    const [smg, setSmg] =useState(true)

    const uploadBtn=(e)=>{
        setuploadStatus(true)
        setSmg(true)
        const file =URL.createObjectURL(e.target.files[0])
        const data =e.target.files[0]
        setPriew(file)
        setFiledata(e.target.files[0])
        
    }
    
    const addBtn=()=>{
        setAddFileData((pre)=>[...pre,filedata])
        // console.log(addFileData[0].name);
    }
    
    const [url, setUrl]=useState([])
    const [alldata, setAlldata]=useState(null)
    
    const uploadFile =()=>{
        setUrl([])
        if (uploadStatus) {
            const formdata= new FormData()
            addFileData.map(data=>{
                formdata.append("photoKey", data)
            })
            const urld =formdata.getAll("photoKey").map(data=>{
                const imgurl=  URL.createObjectURL(data)
                setUrl((pre)=>[...pre,imgurl])
                return imgurl
            });
            setuploadStatus(false)
            setAlldata(formdata)
        }

    }

    const uploadFiledata =()=>{

        alldata.getAll("photoKey").map(data=>{
            const redata= storeService.fileUpload(data)
            console.log(redata);
            if (redata) {
                setSmg(false)
                setUrl([])
                setPriew(null)
                setAddFileData([])
            }
        })
    }


    return (
        <div className='w-full absolute min-h-60 flex justify-center  '>
            <div className='w-[50rem] bg-slate-400 min-h-[16rem] border border-yellow-400 shadow-md shadow-orange-500 relative '>
            <NavLink to={"/"} className='flex justify-end mr-2 text-red-700'>X</NavLink>
                <span className="font-serif text-2xl text-green-700 bg-white px-2 rounded-sm shadow-md shadow-green-700">Upload photo</span>
                <div className='bg-gray-60 flex flex-col '>
                    <div className='border mx-40 flex mt-4 justify-between' onChange={uploadBtn}>
                        <div className='px-2 w-20'>PHOTO</div>
                        <input type="file" className='grow bg-gray-500 text-yellow-300 rounded-sm 
                        file:text-orange-900 file:bg-zinc-400 file:rounded-md file:border file:text-sm
                        '></input>
                        <button className='px-4 bg-gray-800 text-white text-sm rounded-md cursor-pointer hover:bg-gray-600 hover:text-yellow-300' onClick={()=>addBtn()} >Add</button>
                    </div>
                    <img src={`${priew}`} alt="" className='w-20 border absolute right-2 top-[4rem]' />
                    <div className='flex justify-center'>
                        <button className='bg-blue-700 rounded-md text-white px-2 mt-2  ' onClick={()=>uploadFile()}>upload Priew</button>
                        <button className='bg-blue-700 rounded-md text-white px-2 mt-2 mx-4 ' onClick={()=>uploadFiledata()}>upload</button>
                    </div>
                        <div className={`bg-green-300 text-blue-600 ${smg && "hidden"}`}>upload succusecfull</div>
                    <div className='grid grid-cols-4  bg-slate-500 text-white  mt-3'>
                        <div className='max-w-[15rem] text-start px-2'>{addFileData.map((val)=>{ return <div>{val.name}</div>})}</div>
                        <div className='grid grid-cols-6 col-span-3  '>
                            {url?.map((img)=>{return <img src={`${img}`} alt="" className='w-40 border h-20' />})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPhoto
