import React, { useState } from 'react'

function Box() {
    const [option, setOption ] = useState(true)
    const [subOption, setSubOption ] = useState(true)
    const [subOption1, setSubOption1 ] = useState(true)
    const [subOption2, setSubOption2 ] = useState(true)

    const list=[
        { name: "work1"},
        { name: "work2"},
        { name: "work3" ,
                sublist:[
                    { list: "work5"},
                    { list: "work6"},
                    { list: "work7"},
                    { list: "work8",
                            sublist: [{list:"work"}],
                            style: "left-14 bg-blue-500 p-1",
                            onClick:()=>{setSubOption2(!subOption2),
                            console.log("cli");}
                        }
                    ],
                style:" left-20 bg-green-500 p-1",
                clickevents:subOption1 && "hidden" ,
                    onClick:()=>{setSubOption1(!subOption1),
                        setSubOption(true)
                                    } 
                

            },

        { name: "work4", sublist:[
            { list: "work9"},
            { list: "work10"},
            { list: "work11"},
            { list: "work12"},
            ],
            style:" left-20 bg-yellow-500 p-1 text-sm",
            clickevents:subOption && "hidden" ,
            onClick:()=>{setSubOption(!subOption),
                setSubOption1(true)}
            
            },
    ]


    return (
        <div className=' absolute top-[10rem] left-[6rem]'>
            <div className='text-left bg-slate-600 h-80 w-80 p-2 '>
                <div className={`bg-slate-900 m-2 p-2 rounded-md inline-table`} >
                    <div className='bg-sky-500 rounded-md text-black cursor-pointer' onClick={()=>setOption(!option)}>option</div>
                <div className={`${option && "hidden"}`}>
                        {list?.map(data=>{
                        return (<>
                                    <div key={data.name} className='text-white p-1 flex flex-col left-[6rem] cursor-pointer' onClick={data.onClick}>
                                            {data.name}
                                    </div>
                                    <div className= {`rounded-lg absolute cursor-pointer ${data?.style} ${data.clickevents}`}  >
                                        {data.sublist?.map(datas=>{
                                            return ( <>
                                            <div key={datas.list} className='  left-[5rem]  text-black p-1 ' onClick={datas.onClick} >{datas.list}</div>
                                            
                                                <div className= {`absolute cursor-pointer ${subOption2 && "hidden"} ${datas?.style}`} >
                                                    {datas.sublist?.map(data2=> {return <div className={``} >{data2.list}</div>} )}
                                                </div>
                                            </>
                                            )

                                        })}
                                    </div>
                        </>
                            
                            )
                        })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Box
