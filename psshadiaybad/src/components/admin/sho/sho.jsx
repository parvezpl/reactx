import React, { useEffect, useState } from 'react'
import { Client, Account, ID, Storage,Databases } from 'appwrite';
import dbService from '../../../utility/database';
import storeService from '../../../utility/storage';
import envConfig from '../../../appwrite/conf/conf';



function Sho() {

    const [allstore, setAllstore]=useState(null)
    const [priews, setPriews]=useState(null)
    const [user, setUser]=useState(null)
    const [alldata, setAlldata]=useState(null)
    useEffect(()=>{
        storeService.storeFilesList().then((data)=>{
            data.map(file=>{
                console.log(file.$id),
                setAllstore(file)
            })
    }

        )
        
        dbService.dbListDoc().then((data)=>{
            setAlldata(data.documents)
            setUser(data.documents[0])
        })
    },[])

    useEffect(()=>{
        if (allstore?.$id) {
            const priew=storeService.filePriview(allstore?.$id)
            priew.then(data=>setPriews(data))
            console.log(priews);
        }

    },[allstore])

    return (
        <>
        <div className='border min-h-[10rem] '>
            <h1 className='bg-gray-500 text-white'>SHO : {user?.name}</h1>
            <div className='w-full  text-start  flex'>
                <div className='flex-none w-[17rem] border '>
                    <div className='border pl-4 p-2'>Name</div>
                    <div className='border pl-4 p-2'>PNO</div>
                    <div className='border pl-4 p-2'>PERSNAL MOBILE NO.</div>
                    <div className='border pl-4 p-2'>CUG MOBILE NO.</div>
                </div >
                <div className='grow border '>
                    <div className='border pl-4 p-2 flex'>
                        <div className='grow'><input defaultValue={user?.name} className='bg-transparent text-stone-700 ' /> </div>
                        <button className=' border border-yellow-400 shadow-md shadow-green-700 px-2 rounded-md hover:bg-teal-600 hover:text-stone-100'>change</button>
                    </div>
                    <div className='border pl-4 p-2 flex'>
                        <div className='grow'><input defaultValue={user?.pno} className='bg-transparent text-stone-700' /></div>
                        <button className=' border border-yellow-400 shadow-md shadow-green-700 px-2 rounded-md hover:bg-teal-600 hover:text-stone-100'>change</button>
                    </div>
                    <div className='border pl-4 p-2 flex'>
                        <div className='grow '><input defaultValue={user?.mobile} className='bg-transparent text-stone-700' /> </div>
                        <button className=' border border-yellow-400 shadow-md shadow-green-700 px-2 rounded-md hover:bg-teal-600 hover:text-stone-100'>change</button>
                    </div>
                    <div className='border pl-4 p-2'>9454403462</div>
                </div>
            </div>
        </div>
        <div className='flex flex-col mt-8'>
            <div>LIST OF SHO</div>
            <div className='flex flex-col w-full text-start'>
                {alldata?.map((val,indexs)=>{
                    return(
                        <div key={val.index} className='flex w-full border'>
                            <p className='pl-4 w-20 '>{val.index}</p>
                            <p className='grow  pl-4'>{val.name}</p>
                            <p className='w-40'>{val.pno}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='w-80'>
                <img src={priews?.href} alt="" />
        </div>
        </>
    )
}

export default Sho
