"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const Generate = () => {
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [Links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const handleChange = (index,link,linktext) => {
        setLinks ((initialLinks)=>{
            return initialLinks.map((item,i)=>{
                if(i==index){
                    return{link,linktext}
                }
                else{
                    return item
                }
            })
        })
    }


    const addLink = () => {
        setLinks(Links.concat([{link:"",linktext:""}]))
    }
    
    



    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "Links": Links ,
            "handle": handle,
            "pic":pic
        });
      

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success ){
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else{
            toast.error(result.message)
        }

    }


    return (
        <div className='bg-[#225ac0]    min-h-screen grid grid-cols-2' >


            <div className="col1 flex justify-center items-center flex-col text-gray-900  ">
                <div className='flex flex-col gap-5 my-8 ' >
                    <h1 className='font-bold text-4xl ' >Create Your Bittree</h1>
                    <div className="box bg-black/30 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                        <div className="item">

                            <h2 className='font-semibold text-2xl ' >Step 1: Claim your Handle</h2>
                            <div className='mx-4' >
                                <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-white mx-2 my-2 px-3 py-2 focus:outline-blue-500 rounded-full ' type="text" placeholder='Choose a Handle' />
                            </div>
                        </div>
                        <div className="item">
                            <h2 className='font-semibold text-2xl ' >Step 2: Add Links</h2>
                            { Links && Links.map((item,index)=>{
                                return <div key={index}  className='mx-4 ' >
                                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value,item.linktext) }} className='bg-white mx-2 my-2 px-3 py-2 focus:outline-blue-500 rounded-full ' type="text" placeholder='Enter link' />
                                <input value={item.linktext || ""} onChange={e => { handleChange(index,item.link, e.target.value) }} className='bg-white mx-2 my-2 px-3 py-2 focus:outline-blue-500 rounded-full ' type="text" placeholder='Enter link text' />
                            </div>})}
                            <button onClick={() => addLink()} className=' cursor-pointer p-5 py-2 mx-2 text-white font-bold bg-[#1e2330] rounded-3xl ' >+ Add Link</button>
                        </div>
                        <div className="item">
                            <h2 className='font-semibold text-2xl ' >Step 3: Add Picture and finalize </h2>
                            <div className='mx-4 flex flex-col' >
                                <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-white mx-2 my-2 px-3 py-2 focus:outline-blue-500 rounded-full ' type="text" placeholder='Enter link to your Picture' />
                                <div className='flex flex-col items-center my-3' >
                                    <button disabled ={pic==""||handle==""||Links[0].linktext==""} onClick={()=>{submitLinks()}}  className=' disabled:bg-slate-500 p-5 py-2 mx-2 w-fit  text-white font-bold bg-[#1e2330] rounded-3xl' >Create your BitLink</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col2 h-screen overflow-hidden">
                <img className="object-cover h-full w-full" src="/generate.webp" alt="Generate Your Links" />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate
