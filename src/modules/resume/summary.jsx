import React,{useState} from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
import { gptApi } from '../api/gpt';
import { ClipLoader } from 'react-spinners';
import { BsDot } from "react-icons/bs";


export default function Summary({params,setParam}) {
  const [isLoading,setloading]=useState(false)
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

        setParam({...params,summary:res })

       }catch(e){
        console.log(e)
        setloading(false)
     }

 }
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Summary</h5>

         <div className='w-full flex flex-col py-8 flex flex-col space-y-2'>
                <h5 className='text-sm font-semibold text-slate-600'>Briefly describe the value you bring through your skill</h5>
                <div className='w-3/5 border h-56 rounded-lg flex flex-col px-6 py-3 justify-between'>
                <div className='h-full h-44 overflow-y-scroll text-sm text-slate-600'>

                    {params?.summary}

                      </div>
                       <textarea placeholder='Enter your message' className='text-xs font-semibold h-44 px-4 py-2 outline-none text-slate-600'/>
                    

                       <div className='flex justify-center'>
                             <h5 className='flex items-center space-x-1 text-blue-400 font-semibold'>
                             <HiOutlinePencil className='text-lg'/>
                             <span className='text-sm'>Generate using AI</span>
                                
                             </h5>

                       </div>

                </div>

         </div>



    </div>
  )
}
