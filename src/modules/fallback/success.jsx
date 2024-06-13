import React,{useEffect,useRef} from 'react'
import {getPaymentStatus} from "../api/stripe"
import { ImCheckmark } from "react-icons/im";
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { ClipLoader } from 'react-spinners';
import { useReactToPrint } from 'react-to-print';
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Fallback() {
      const [paid,setpaid]=useState(false)
      const [result,setresult]=useState(false)
      const [params,setParam]=useState({
        firstname:"John",
        lastname:"Doe",
        experiences:[],
        summary:""
         })

      const componentRef = useRef();
      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    const session= localStorage.getItem("stripe-session");
    const doc= localStorage.getItem("doc-params");
      useEffect(()=>{
             setParam(JSON.parse(doc))
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
                    <PDF 
                      ref={componentRef}
                      params={params}
                      setParam={setParam}

                    />

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
                          {paid?
                                <button className='bg-black text-white py-2 rounded-full w-full' onClick={handlePrint}>Download</button>
                                :
                                <Link to={"/resume"}>
                                         <button className='bg-black text-white py-2 rounded-full w-full' >Go back</button>
                                </Link>
                           
                                

                          }
                            
                               <button className='bg-white text-black py-2 rounded-full w-full border border-black'>Edit</button>

                         </div>
                       

                    </div>
                    
                </div>

           </div>


    </div>
  )
}



export const PDF = React.forwardRef((props, ref) => {
       console.log(props,"prop")
       const params=props.params
    return(
      <div className='w-full flex justify-center'>
      <div className='w-full  relative' style={{background:"#fcfbf7",height:"600px"}}>
         <div className='w-full h-full px-12 py-12 text-slate-400 flex space-y-6 flex-col' ref={ref} style={{color:"#9d9c9a"}}>
         <div className='border-b-2 border-slate-700 pb-4 flex flex-col space-y-3 w-full '>
                            <h5 className='text-2xl font-semibold'>{params?.firstname?.toUpperCase() + " " + params?.lastname?.toUpperCase()}</h5>
                            <h5 className='text-sm font-bold'>FRONTEND ENGINEER</h5>
                            <p className='text-sm font-light'>{params?.summary}</p>

                      </div>
                      <div className='border-b border-black pb-4 flex  py-4 w-full'>
                       <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>SKILLS</h5>
                       <div className='flex flex-col  w-1/2'>
                          {["Text","Text"]?.map((skill)=>{
                               return(
                                  <h5 className='flex items-center text-sm font-light'>
                                       <BsDot className='text-black font-semibold text-lg'/>
                                       <span>{skill}</span>
                                      
                                  </h5>
                               )
                          })

                          }

                       </div>

                      
                    


                 </div>

                 <div className='border-b border-black pb-4 flex  py-4 w-full'>
                              <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>Education</h5>
                              <div className='flex flex-col  w-1/2'>
                                    <div className='flex flex-col w-full '>
                                       <h5 className=' font-semibold text-sm pb-3'>{params?.schoolName?.toUpperCase()}</h5>
                                       <p className='text-sm font-light'>
                                          {params?.degree},{params?.studyField}

                                       </p>
                                       <h5 className='text-sm font-light'>{params?.schoolLocation} | {params?.gradYr} </h5>

                                    </div>


                              </div>

                       </div>

                       <div className='border-b border-black pb-4 flex  py-4 w-full'>
                              <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>Experience</h5>
                              <div className='flex flex-col  w-1/2'>
                                    <div className='flex flex-col'>
                                       <h5 className=' font-semibold pb-3'>Frontend Engineer</h5>
                                       <p className='text-sm font-light'>
                                          Bacholor of science

                                       </p>

                                    </div>


                              </div>

                       </div>

                      
                       <div className='border-b border-black pb-4 flex  py-4 w-full'>
                              <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>Contact</h5>
                              <div className='flex flex-col  w-1/2'>
                                    <div className='flex flex-col font-light text-sm'>
                                       <h5>{params?.email}</h5>
                                       <h5>{params?.country},{params?.city}</h5>
                                       <h5>{params?.phone}</h5>
                                    </div>


                              </div>

                       </div>


         </div>
     

     </div>
    

</div>
    )
})
