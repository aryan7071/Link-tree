"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")

  const createTree= () => {
    router.push(`/generate?handle=${text}`)
  }
  


  return (
    <main>
      <section className="min-h-[100vh] bg-[#d2e823] grid grid-cols-2" >
        <div className=" flex  justify-center flex-col ml-[10vw] 0 " >
          <p className="text-[#254f1a] font-bold text-8xl w-2xl"> A link in bio </p>
          <p className="text-[#254f1a] font-bold text-8xl w-2xl">built for you.</p>
          <p className="text-[#254f1a] font-bold w-xl my-5 " >
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-5 ">
            <input value={text} onChange={(e)=>settext(e.target.value)} className="px-3 py-4 focus:outline-[#d2e823] bg-white rounded-lg " type="text" placeholder="Enter your handle" />
            <button onClick={()=>createTree()}  className="bg-[#254f1a] rounded-full px-4 py-4 text-white font-bold cursor-pointer " >Claim Your BitTree </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw] " >
          <img  className="rounded-4xl w-xl" src="/home.webp" alt="" />
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#2665d6]" >

      </section>
    </main>
  );
}
