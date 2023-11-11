import React from 'react'

function Cctnspage() {
    return (
        <>
            <div className='flex-1 bg-sky-400'>
                <div className=' border px-2 bg-gray-600 text-white'>
                    सीसीटीएनएस आनलाईन कार्य हेतु लिंक
                </div>
                <table className="table-auto border w-full bg-gray-300">
                    <thead className='border border-black bg-slate-400'>
                        <tr>
                        <th>क्र0सं0</th>
                        <th>कार्य</th>
                        <th>लिंक</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className=''>
                            <td>1</td>
                            <td>tailwind</td>
                            <td className=' cursor-pointer'>https://tailwindcss.com/docs/table-layout</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>YOUTUBE</td>
                            <td>https://www.youtube.com/</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </>
    )
}

export default Cctnspage
