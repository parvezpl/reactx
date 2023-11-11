import React from 'react'
import { Client, Account, ID } from 'appwrite';
import { useEffect, useState } from 'react';

function Apptes() {
        const client = new Client();
        const account = new Account(client);
        const email="parvezalam123@gmail.com"
        const password="12341234"
        const name= "parvez alam"
        const [user, setUser]=useState(null)
        
        client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("651b7bfb84126b3b1c69")

        const login = async({email, password})=> {
            console.log(email);
            try {
                return await account.createEmailSession(email, password);
            } catch (error) {
                console.log(error);
                throw error
            }
        }

        const siup=async ({email, password, name}) => {
           return await account.create(ID.unique(),email, password, name )
        }
    
    const loginbtn =()=>{
        const data = login({email, password})
        const usData= account.get()
        usData.then((res)=>setUser(res.email))
        console.log(usData);
        // data.then((res)=>setUser(res.providerUid))
    
    }

    const singup =()=>{
        console.log("cl");
        const res = siup({email, password, name})
        console.log(res);
    }

    
    console.log(user);
    return (
        <div className=" text-center">
            test
            <button onClick={loginbtn}>
                login {user}
            </button>
        <div>
            <button onClick={singup}>signup</button>
        </div>
        </div>
    )
}

export default Apptes
