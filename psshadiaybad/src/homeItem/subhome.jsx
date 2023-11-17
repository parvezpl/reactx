import React from 'react'
import { NavLink } from 'react-router-dom';
import Photos from './homeComp/photos';

function Subhome({homepagetoggle}) {
    return (
        <>
            <div className={` flex flex-col justify-end  w-full ${!homepagetoggle && "hidden"} `} >
                <div className='flex justify-end'>
                    <div className='border w-40 my-2 bg-gray-500 resize'> hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur temporibus quasi neque omnis expedita soluta praesentium deleniti eaque non similique! Asperiores aut tempore quos hic! Voluptates neque doloremque libero accusantium!</div>
                    <div className='flex border m-2 w-[78%] '>
                        <img src="src\assets\p2.jpeg" alt="thana pic" className=' object-cover h-[20rem] w-full' />
                    </div>
                </div>
                    <p className=' bg-teal-800 text-white h-6'>फोटो का डिटेल यहा पर दिखाया जायेगा । </p>
                    <div className='bg-zinc-400 gap-4 w-full'>
                        <NavLink to={"/photos"}><div className=' bg-gray-500 cursor-pointer hover:bg-blue-400'>PHOTOS</div></NavLink>
                        <Photos/>

                    </div>
            </div>
        </>
    )
}

export default Subhome
