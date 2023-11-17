import React, { useEffect, useState } from 'react'
import storeService from '../../utility/storage'

function Photos() {
    const [storeFiles, setStoreFiles]=useState(null)
    const [priewData, setPriewData]=useState([])
    const [loading,setLoading]=useState(false)
    const [urlData,setUrlData]=useState({})

    useEffect(()=>{
        storeService.storeFilesList().then((storedata)=>{
            setStoreFiles(storedata)
            storedata?.map(file=>{
            const id=file?.$id
            if (id) {
                const responce=storeService.filePriview(id)
                .then(data=>{
                    if (data) {
                        setPriewData(prev=>[...prev,data])        
                    }
                })
                .catch((err)=>console.log(err))
            }
        })
    })
    },[loading, storeFiles,setLoading])

    const photoBtn=(url, name, id)=>{
        if (url) {
            setLoading(true)
            setUrlData({url,name, id})      
        }
    }
    const deletBtn=(id)=>{
        const res=storeService.storeFilesDelete(id)
        console.log(res);
        setLoading(false)
        if (res) {
            
        }
    }

    return (
        <div className='flex text-xl p-1 relative'>
            {
                storeFiles?.map((file, index)=>{return <div key={file.$id} className='flex ' onClick={()=>photoBtn(priewData[index],file.name, file.$id)}>
                    <div className='w-25 border border-black'><img src={priewData[index]} alt="" className='w-20 m-1 cursor-pointer' /></div>
                    {/* <div className='flex items-center text-blue-800'> File Name :- {file.name}</div> */}
                </div>})
            }
{/* //big size photo view */}
            <div  className={`${!loading && "hidden"} absolute border w-96 min-h-40 left-1/3 -top-40 shadow-md shadow-yellow-300 `}>
                <div className=' absolute right-4 hover:text-blue-600 text-red-700 cursor-pointer font-bold h-4 w-4 mt-1' onClick={()=>setLoading(false)} >X</div>
                <img src={`${urlData?.url}`} alt="" />
                <div className='bg-gray-600 full text-yellow-400 text-sm border border-gray-500'>{`${urlData?.name}`}</div>
                <button className='bg-red-700 rounded-md px-2 text-sm hover:bg-gray-700 text-white'  onClick={()=>deletBtn(urlData?.id)}>delete</button>
            </div>
        </div>
    )
}

export default Photos
