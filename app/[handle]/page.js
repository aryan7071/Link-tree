import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = (await params).handle
   const client = await clientPromise;
    const db = client.db("bittree")
    const collection  = db.collection("links")

    //if the Handle is already is claimed you cannot create the bittree
    const item = await collection.findOne({handle:handle})
    if(!item){
      return notFound()
    }
  const item2 = /** 
* Paste one or more documents here
*/
{
  "Links": [
    {
      "link": "https://www.instagram.com/",
      "linktext": "instagram"
    },
    {
      "link": "https://x.com/aryan34802",
      "linktext": "Twitter"
    }
  ],
  "handle": "barry ",
  "pic": "https://avatars.githubusercontent.com/u/175052103?s=400&u=f62d36e84bc7c17026fca91206abb8e26b5f7b4b&v=4"
}


  return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10  " >
    {item &&  <div className="photo flex justify-center flex-col items-center gap-3 ">
        <img className="rounded-full w-35  " src={item.pic} alt="" />
        <span className="font-bold text-xl  " >@{item.handle}</span>
        <span className="desc w-80 text-center ">{item.desc }</span>
        <div className="links">
          {item.Links.map((item,index)=>{
            return <Link key={index} href={item.link} > <div className=" font-bold py-4 px-2 bg-purple-100 my-4 min-w-80 flex justify-center rounded-full shadow-lg "  >
              {item.linktext}     
            </div></Link>
          })}
        </div>
       
    </div>}
  </div>
}