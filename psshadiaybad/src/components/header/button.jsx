import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { regFn } from '../../store/authSlice';


function Button(props) {
    const dispatch= useDispatch()
    const btnFn=()=>{
        dispatch(regFn(props.value))
    }
    return (
        <button className={`${props.className} px-1 border rounded-sm hover:text-black`} onClick={btnFn}>
            {props.children}
        </button>
    )
}

export default Button
