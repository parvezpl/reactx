import React from 'react'

function Subhome({homepagetoggle}) {
    console.log(homepagetoggle);
    return (
        <>
            <div className={`inline-table flex-col  h- w-full ${!homepagetoggle && "hidden"} `} >
                <div className='flex flex-col border m-2 h-[20rem] w-[98%] overflow-auto items-baseline '>
                    <img src="src\assets\p2.jpeg" alt="thana pic" className='' />
                </div>
                    <p className=' bg-lime-600 text-white h-6'>फोटो का डिटेल यहा पर दिखाया जायेगा । </p>
                    <div className='grid grid-cols-4 bg-zinc-400 gap-4 w-full'>
                        <div className='h-20 bg-gray-800'>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>4</div>
                        <div>4</div>
                        <div>4</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>8</div>
                        <div>8</div>
                        <div>8</div>
                    </div>
            </div>
        </>
    )
}

export default Subhome
