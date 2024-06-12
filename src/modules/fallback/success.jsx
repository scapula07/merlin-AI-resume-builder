import React,{useEffect,useRef} from 'react'
import {getPaymentStatus} from "../api/stripe"
import { ImCheckmark } from "react-icons/im";
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { ClipLoader } from 'react-spinners';
import { useReactToPrint } from 'react-to-print';

export default function Fallback() {
      const [paid,setpaid]=useState(false)
      const [result,setresult]=useState(false)

      const componentRef = useRef();
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    const session= localStorage.getItem("stripe-session");
      useEffect(()=>{
           const checkPaymentStatus=async()=>{
                  try{
                    const res=await getPaymentStatus(JSON.parse(session)?.id)
                    res==="paid"?setpaid(true):setpaid(false)
                    res?.length>0&&setresult(true)

                  }catch(e){
                    console.log(e)
                  }
               
           }   

           JSON.parse(session)?.id?.length >0&&checkPaymentStatus()
      },[])
  return (
    <div className='w-full flex justify-center pt-10'>
           <div className='w-3/5 flex items-center space-x-10'>
                <div className='w-1/2'>
                    <PDF ref={componentRef}/>

                </div>
                <div className='w-1/2 relative'>
                    {!result&&
                          <div className='absolute top-0 h-full w-full  flex justify-center'>
                              <ClipLoader color='blue'/>
                        

                           </div>

                    }
                   
                   
                    <div className={result?'flex flex-col items-center space-y-6 relative ':'flex flex-col items-center space-y-6 relative blur'}>

                        {paid?
                                <div className='flex flex-col items-center '>
                                <ImCheckmark  className='text-4xl font-semibold text-green-500'/>
                                <h5 className='font-semibold'>Payment completed</h5>

                          </div>
                          :
                          <div className='flex flex-col items-center '>
                          <FaXmark   className='text-5xl font-bold text-red-500'/>
                          <h5 className='font-semibold'>Payment failed</h5>

                    </div>

                        }
                     
                          <div className='flex flex-col space-y-3'>
                                <h5 className='text-4xl font-semibold'>Here’s Your Resume!</h5>
                                <h5 className='text-slate-600 font-light '>You can still make changes to your previously filled data</h5>
                         </div>

                         <div className='flex flex-col space-y-3 w-full py-4'>
                               <button className='bg-black text-white py-2 rounded-full w-full' onClick={handlePrint}>Download</button>
                               <button className='bg-white text-black py-2 rounded-full w-full border border-black'>Edit</button>

                         </div>
                       

                    </div>
                    
                </div>

           </div>


    </div>
  )
}



export const PDF = React.forwardRef((props, ref) => {
    return(
        <div className='w-full flex justify-center'>
        <div className='w-full h-96 relative' style={{background:"#e3e2de",height:"600px"}}>
           <div className='w-full h-full px-12 py-8 text-slate-400 ' ref={ref} style={{color:"#9d9c9a"}}>
                   <div className='border-b-2 border-slate-700 pb-4 flex flex-col space-y-3 '>
                         <h5 className='text-2xl font-semibold'>JANE SMITHERTON</h5>
                         <h5 className='text-sm font-bold'>FRONTEND ENGINEER</h5>
                         <p className='text-sm font-light'>I am an experienced Frontend engineer seeking a full-time position in the field of web development and design, where I can apply my knowledge and skills for continuous improvement.</p>

                   </div>

                   <div className='border-b-2 border-slate-700 pb-4 flex  '>


                   </div>


           </div>
       

       </div>
      

</div>
    )
})
