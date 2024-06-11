import React from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
export default function Summary() {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Summary</h5>

         <div className='w-full flex flex-col py-8 flex flex-col space-y-2'>
                <h5 className='text-sm font-semibold text-slate-600'>Briefly describe the value you bring through your skill</h5>
                <div className='w-3/5 border h-56 rounded-lg flex flex-col px-6 py-3 justify-between'>
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
