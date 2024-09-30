import React from 'react'
import bg8 from "/bg8.jpg?urlbg8.jpg"
import bg7 from "/bg7.jpg?urlbg7.jpg"
import { FaPaperPlane } from "react-icons/fa"
import MessageWindow from '../components/MessageWindow'
function Home() {

    let [messages,setMessages]=React.useState([{id:1, mess:"hi",name:"sarah"},{id:2,mess:"hello",name:"john"}])
    let orangeBorder ="border-[1px] border-[#7c5545]"
    let blueBorder = "border-[1px] border-[#356277]"

    

  return (
    <div  className='bg-slate-900 max-sm:block flex justify-center h-screen items-center max-sm:space-x-0 space-x-1  ' >
      {/* <div className="bg-black max-sm:h-[47%] max-sm:w-[100%] w-[50%] h-[100vh]  relative flex flex-col justify-center items-center" >
        <img src={bg7} alt="" className='from-black to-transparent  w-[100%] object-cover h-[100%]     opacity-60'/>
        <div className='from-20% to-70% filter-layer w-[100%] h-[100%] bg-transparent absolute top-0 from-black to-transparent bg-gradient-to-t' ></div>
        
        <div className=' absolute top-0 glass-blue w-[90%] max-sm:h-[75%] h-[85%] mt-2 ' ></div>

        <div className='  w-[100%] max-sm:h-[10%] h-[5%] absolute bottom-0 flex space-x-2 max-sm:mb-5 mb-10 justify-center pr-4'>
            <input value={valueOne} onChange={handleInputChangeOne} type="text" className='bg-[#b3b4b6] rounded-lg border-2 border-[#2a918a] w-[80%]' />
            <button onClick={()=>console.log(valueOne)} className='relative rainbow border-[1px] border-white duration-300 hover:scale-125  bg-black w-10  rounded-3xl flex justify-center items-center'>  <FaPaperPlane color='white'/></button>

        </div>
      </div> */}
      <MessageWindow name="sarah" setMessages ={setMessages} messages={messages} glassColor="rgba(4, 25, 44, 0.44)" src={bg7}/>
      <MessageWindow name="john" setMessages ={setMessages} messages={messages} glassColor="rgba(179, 93, 25, 0.13)" src={bg8}/>

      {/* <div className='bg-black max-sm:h-[47%] max-sm:w-[100%] w-[50%] h-[100vh]  relative max-sm:mt-5 m-2 flex flex-col justify-center items-center' >
      <img src={bg8} alt="" className='from-black to-transparent w-[100%]  object-cover h-[100%]    opacity-80' />
      <div className='from-20% to-70% filter-layer w-[100%] h-[100%] bg-transparent absolute top-0 from-black to-transparent bg-gradient-to-t' ></div>
      <div className=' absolute top-0 glass-orange w-[90%] max-sm:h-[75%] h-[85%] mt-2' ></div>
      <div className='   w-[100%] max-sm:h-[10%] h-[5%] absolute bottom-0 flex space-x-2 max-sm:mb-5 mb-10 justify-center pr-4'>
            <input value={valueTwo} onChange={handleInputChangeTwo} type="text" className='bg-[#b8b7b4] rounded-lg border-2 border-[#887124] w-[80%]' />
            <button onClick={()=>console.log(valueTwo)} className='relative rainbow border-[1px] border-white duration-300 hover:scale-125  bg-black w-10  rounded-3xl flex justify-center items-center'>  <FaPaperPlane color='white'/></button>
         

      </div>
      </div> */}
    </div>
  )
}

export default Home
