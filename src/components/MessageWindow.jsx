import React from 'react'
import { FaPaperPlane } from "react-icons/fa"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MessageWindow(props) {
    
    let [value, setValue] = React.useState("")

    function handleInputChange(event) {
        setValue(event.target.value)

    }

    let [nameInput,setNameInput] = React.useState("")
    let [info,setInfo] = React.useState({})
    
    function handleNameChangeInput(event){
        
        setNameInput(event.target.value)
    }

    function handleSubmit(){
         

        if(nameInput.length>18 ){
            toast.error("names can't be more than 18 letters");
            return 
        }

        if(nameInput===""){
            toast.warning("Please Pick a Name");
            return 
        }
        else{
            props.setName({name:nameInput,userId:props.userId})
        setInfo({name:nameInput,userId: props.userId })
        }
       
       
    }

    function handleSend() {
 

        let id = props.messages.length + 1
        let message = value
        let name = props.name
        let date = new Date() 
        let hours  = date.getHours()
        let minutes = date.getMinutes() +" am"
        if(message.length<=0){return}
        if(hours>12) {hours = hours-12; minutes= minutes.replace(" am"," pm")}
        if(hours===0) {hours = 1;}
      
        props.setMessages(
            [...props.messages,
            {
                mess: message,
                name: name,
                id: id,
                userId: info.userId,
                hours: hours,
                minutes:minutes
            }]
        )
        setValue("")
    }


    return (
        <div className="p-4 bg-black max-sm:h-[48%] max-sm:space-y-1 max-sm:w-[100%] w-[20em] h-[90vh] rounded-3xl overflow-hidden  relative flex flex-col justify-center items-center" >
              <ToastContainer/>
            <div className="max-sm:space-x-4 max-sm:pl-10 max-sm:pb-2 w-[100%] bg-[#000000c0] absolute top-0 z-10 max-sm:flex-row flex flex-col items-center max-sm:justify-start">
                <img src={props.userIcon} alt="" className='  space-x-4 max-sm:size-10 size-12 rounded-full mt-5' />
                <h2 className='text-white items-center text-center'>{props.partnerName}</h2>
            </div>
            <img src={props.src} alt="" className='rounded-3xl from-black to-transparent  w-[100%] object-cover h-[100%]     opacity-60' />

            <div className='from-20% to-70% filter-layer w-[100%] h-[100%] bg-transparent absolute top-0 from-black to-transparent bg-gradient-to-t' >


            </div>

            <div className='pt-20 overflow-y-auto  p-4 absolute top-0 glass-blue w-[95%] max-sm:h-[85%] h-[85%] mt-2 ' style={{ backgroundColor: props.glassColor }}>
        
                {props.messages.map((item) => {
                 
                    return <div 
                                key={item.id} 
                                
                                className={
                                    info.userId === item.userId ?
                                  'text-white z-50 flex justify-end ' :
                                  "text-white z-50 "}>

                                    {
                                    info.userId === item.userId ? 
                                    <div className='flex flex-col items-end'>
                                        <h2 className='mt-1 tracking-wide capitalize  text-end text-md text-normal'>{item.name}</h2>
                                        <div className='p-2 bg-orange-500 rounded-tr-none rounded-2xl '>
                                            <p className= " break-all text-md tracking-wide p-1  max-w[50%] inline-block ">{item.mess}</p>
                                           
                                        </div>
                                        <h1 className='pl-4 text-end text-sm text-gray-400'>{item.hours}:{item.minutes}</h1> 
                                        
                                      
                                    </div> 
                                    : 
                                    <div className='flex flex-col  '>
                                         <h2 className='mt-1 tracking-wide capitalize  text-start text-md text-normal '>{item.name} </h2>
                                         <div className='ml-3'>
                                             <p className= "break-all text-md tracking-wide bg-[#4c6e89] p-2 rounded-tl-none rounded-2xl  max-w[50%] inline-block ">{item.mess}</p> 
                                            
                                         </div>
                                         <h1 className='text-start text-sm text-gray-400'>{item.hours}:{item.minutes} </h1> 
                                    </div> 
                                    
                                }
                                
                        
                        </div>

                })}
            </div>

            {
            props.name? "": 
                <div className=' text-white absolute space-y-4 text-lg w-[100%] h-[100%] z-20 bg-[#2d2939] duration-500 flex flex-col justify-center items-center'>
                    <label htmlFor=""> Enter Your Name</label>
                    <input onChange={handleNameChangeInput} type="text"  className='bg-[#3f3d53] rounded-xl border-[1px] border-gray-600 p-2 w-[80%] focus:border-blue-400 focus:border-2'/>
                    <button onClick={handleSubmit} className='bg-[#2e45c6] p-2 shadow-md  hover:bg-[#1c2264]' >Submit</button>
                </div> 
                
                }
            <div className=' mb-5 justify-between items-center w-[90%] max-sm:h-[10%] h-[8%] absolute bottom-2 flex space-x-2 max-sm:mb-5  '>
                
                <textarea value={value} onChange={handleInputChange}  type="text" className='text-white pl-2 p-1 bg-[#5d636f] resize-none  max-sm:h-[100%] h-[75%] rounded-lg  w-[85%] focus:border-blue-400 focus:border-2 flex flex-wrap' />
              
                <button onClick={handleSend} className=' glow-on-hover border-[1px] border-white  relative  duration-300 hover:scale-125  bg-black w-10  rounded-3xl flex justify-center items-center h-[75%]'> <FaPaperPlane color='white' /></button>
                
            </div>
        </div>
    )
}

export default MessageWindow
