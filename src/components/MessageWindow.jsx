import React from 'react'
import { FaPaperPlane } from "react-icons/fa"
function MessageWindow(props) {

    let [value, setValue] = React.useState("")

    function handleInputChange(event) {
        setValue(event.target.value)

    }

    function handleSend() {
        let id = props.messages.length + 1
        let message = value
        let name = props.name
        props.setMessages(
            [...props.messages,
            {
                mess: message,
                name: name,
                id: id
            }]
        )
        setValue("")
    }


    return (
        <div className="bg-black max-sm:h-[47%] max-sm:w-[100%] w-[50%] h-[100vh]  relative flex flex-col justify-center items-center" >
            <img src={props.src} alt="" className='from-black to-transparent  w-[100%] object-cover h-[100%]     opacity-60' />

            <div className='from-20% to-70% filter-layer w-[100%] h-[100%] bg-transparent absolute top-0 from-black to-transparent bg-gradient-to-t' >


            </div>

            <div className='overflow-y-auto  p-4 absolute top-0 glass-blue w-[90%] max-sm:h-[75%] h-[85%] mt-2 ' style={{ backgroundColor: props.glassColor }}>

                {props.messages.map((item) => {
                    return <div 
                                key={item.id} 
                                className={props.name === item.name ?
                                  'text-white z-50 flex justify-end' :
                                  "text-white z-50 "}>

                                    {
                                    props.name === item.name? 
                                    <div>
                                        <h2 className='mt-2 tracking-wide capitalize mb-2 text-end text-lg text-normal'>{item.name}</h2>
                                        <p className= "rounded-tr-none rounded-2xl text-lg tracking-wide bg-orange-500 p-3  mr-5 max-w[50%] inline-block">{item.mess}</p> 
                                    </div> 
                                    : 
                                    <div>
                                         <h2 className='mt-2 tracking-wide capitalize mb-2 text-start text-lg text-normal'>{item.name} </h2>
                                         <p className= "text-lg tracking-wide bg-[#4c6e89] p-3 rounded-tl-none rounded-2xl ml-5 max-w[50%] inline-block ">{item.mess}</p> 
                                    </div> 
                                    
                                }
                                
                        
                        </div>

                })}
            </div>

            <div className='  w-[100%] max-sm:h-[10%] h-[5%] absolute bottom-0 flex space-x-2 max-sm:mb-5 mb-10 justify-center pr-4'>
                <input value={value} onChange={handleInputChange} type="text" className='bg-[#b3b4b6] rounded-lg border-2 border-[#2a918a] w-[80%]' />
                <button onClick={handleSend} className='relative rainbow border-[1px] border-white duration-300 hover:scale-125  bg-black w-10  rounded-3xl flex justify-center items-center'>  <FaPaperPlane color='white' /></button>

            </div>
        </div>
    )
}

export default MessageWindow
