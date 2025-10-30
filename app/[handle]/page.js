export default async function Page({ params }) {
  const { handle } = (await params).handle

  const item = /** 
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


  return <div className="flex min-h-screen bg-purple-400 justify-center items-center" >
    <div className="photo flex justify-center flex-col items-center">
        <img className="rounded-full w-35  " src={item.pic} alt="" />
        <span className="font-bold text-xl  " >@{item.handle}</span>
       
    </div>
  </div>
}