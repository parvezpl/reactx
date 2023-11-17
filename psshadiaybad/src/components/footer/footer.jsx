import React from 'react'

function Footer() {
    return (
        <>
            <div className=' flex bg-cyan-700 border'>
                <div className=' grid grid-cols-3 min-h-[8rem]  text-yellow-200'>
                    <div className='inline-table items-start text-left mt-4 ml-20 text-sm'>
                        <p><span className=' font-bold '>1. </span>यह बेव साइट थाना शादियाबाद द्वारा ओपरेट किया जाता है।</p>
                        <p><span className=' font-bold '>2. </span>इसे और बेहतर बनाने के लिए अपना सुझाव दें । </p>
                        <p><span className=' font-bold '>3. </span>अपना सुझाव देने के लिए यहाँ क्लिक करें । </p>
                        <div className='flex justify-center'>
                            <button className=' text-white border border-black p-[.1rem] rounded-md justify-center w-16 text-sm'>Click</button>
                        </div>
                    </div>
                    <div className='flex flex-col  text-center mt-4 gap-4'>
                        <div>contect : <span>9454403462</span></div>
                        <div>about :<span>Ps Shadiayabad</span></div>
                        <div></div>
                    </div>
                    <div className=' flex flex-col justify-start text-left ml-20 mt-4 gap-4'>
                        <div>Visiter :</div>
                        <div>Member :</div>
                        <div>about : Police Station</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
