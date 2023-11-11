import React from 'react'

function CctnsOffice() {
    const works=[
        {name:"work1"},
        {name:"work2"},
        {name:"work3"},
        {name:"work4", new:[
            {name1:"work11"},
            {name1:"work12"},
            {name1:"work13"},

        ]
        },
    ]

    return (
        <>
            <div className=' absolute left-[15rem] top-[8rem] bg-gray-700 w-40 md:w-[200px] h-auto border border-black text-left pl-4 text-white'>
                {works.map(value=> {
                    return <p key={value.name} className=' hover:bg-slate-500'>{value.name}</p>})
                }
            </div>
        </>
    )
}

export default CctnsOffice
