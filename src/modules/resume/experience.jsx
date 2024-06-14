import React,{useState} from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
import { gptApi } from '../api/gpt';
import { ClipLoader } from 'react-spinners';
import { BsDot } from "react-icons/bs";
import Modal from "../../components/modal"
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


export default function Experience({params,setParam}) {
  const [isLoading,setloading]=useState(false)
  const [trigger,setTrigger]=useState(false)
  const [text,setText]=useState("")

  function convertToArray(str) {
    // Use regex to split the string by digits followed by a period and a space
    const items = str.split(/\d+\.\s+/).filter(Boolean);
    return items;
  }


 const generate=async()=>{
      setloading(true)
     try{
        const res=await gptApi.sendMsg(text)
        console.log(res,"res")
        res?.length>0&&setloading(false)
        const resultArray = convertToArray(res);
        setParam({...params,experiences:resultArray })

       }catch(e){
        console.log(e)
        setloading(false)
     }

 }
 console.log(params?.experiences?.length,"expe length")
  return (
    <>
   
    <div className='w-full '>
         <h5 className='md:text-2xl text-sm font-semibold'>Work Experience</h5>

         <div className='w-full flex flex-col py-8 flex flex-col space-y-2'>
                <h5 className='md:text-sm text-xs font-semibold text-slate-600'>In bulleted points, tell your experience</h5>
                <div className='md:w-3/5 w-full border h-56 rounded-lg flex flex-col px-6 py-3 justify-between'>
                {params?.experiences?.length >0?
                              <ol className='h-full h-44 overflow-y-scroll text-sm flex flex-col'>

                              {params?.experiences?.map((exp)=>{
                                return(
                                    <li className='flex items-center space-x-4 text-slate-600 text-sm font-semibold'>
                                      <BsDot className='text-3xl font-bold' />
                                      {exp}
                                      </li>
                                )
                              })
    
                              }
    
                          </ol>
                          :
                          <textarea placeholder='Enter your experience' className='text-sm font-semibold h-44 px-4 py-2 outline-none text-slate-700 w-full'
                          onClick={(e)=>setText(`${e.target.value}.Can you write me a list seperated in numbers of 5 hard skills a person with this skills or skill should possess. The list should be suitable for a resume(in first person)? Do not write "the end" at the end of the list`)}
                        />


                    }
                    

                       <div className='flex justify-center py-2'>
                       {!isLoading?
                                <h5 className='flex items-center space-x-1 text-blue-400 font-semibold'
                                   onClick={()=>setTrigger(true)}
                                 >
                                 <HiOutlinePencil className='text-lg'/>
                                 <span className='text-sm'>Generate using AI</span>
                                    
                                 </h5>
                                 :
                                 <ClipLoader color='blue' size={12}/>


                          }

                       </div>

                </div>

         </div>



    </div>
      <Modal trigger={trigger}  cname="md:w-2/5 w-full py-2 h-80  px-4 rounded-lg  ">
           <div className='flex flex-col bg-white w-full h-full px-4 py-3 rounded-sm'>
                <div className='flex justify-between w-full'>
                {params?.experiences?.length >0?
                      <h5 className='flex items-center space-x-3 font-semibold text-sm' 
                                  onClick={()=>setParam({...params,experiences:[]})}
                                >
                                <IoIosArrowBack />
                                <span> Back</span>
                                   
                         </h5>
                         :
                         <h5></h5>
}
                     
                    <IoMdClose className='text-2xl' onClick={()=>setTrigger(false)}/>

                </div>

                <div className='border-b overflow-y-scroll h-full'>
                    {params?.experiences?.length >0?
                              <ol className='h-full h-44 overflow-y-scroll text-sm flex flex-col'>

                              {params?.experiences?.map((exp)=>{
                                return(
                                    <li className='flex items-center space-x-4 text-slate-600 text-sm font-semibold'>
                                      <BsDot className='text-3xl font-bold' />
                                      {exp}
                                      </li>
                                )
                              })
    
                              }
    
                          </ol>
                          :
                          <textarea placeholder='Enter your prompt' className='text-sm font-semibold h-44 px-4 py-2 outline-none text-slate-700 w-full'
                          onClick={(e)=>setText(`${e.target.value}.Can you write me a list seperated in numbers of 5 hard skills a person with this skills or skill should possess. The list should be suitable for a resume(in first person)? Do not write "the end" at the end of the list`)}
                        />


                    }
                  

                </div>
                {params?.experiences?.length == 0?
                        <div className='flex justify-end py-4'>
                              {!isLoading?
                                      <button className='flex items-center space-x-1 text-blue-400 font-semibold border border-blue-500 px-6 py-2 rounded-full'
                                      onClick={generate}
                                          >
                                        
                                        <span className='text-sm'>Generate</span>

                                            
                                    </button>
                                    :
                                    <ClipLoader color='blue' size={12}/>
                              }

                        </div>
                   :
                <div className='flex justify-end py-2'>
                 
                        <button className='flex items-center space-x-1 text-blue-400 font-semibold border bg-blue-500 px-6 py-1.5 rounded-full text-white'
                           onClick={()=>setTrigger(false)}
                           >
                          
                          <span className='text-xs'>Insert</span>

                             
                      </button>
                     
              

             </div>
             }


           </div>
      </Modal>
    
    </>
  )
}
