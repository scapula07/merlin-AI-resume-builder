import React ,{useState} from 'react'
import {payment} from "../api/stripe"
import { ClipLoader } from 'react-spinners';
import { BsDot } from "react-icons/bs";


export default function Download() {
    const [isLoading,setloading]=useState(false)
    const pay=async()=>{
        setloading(true)
        try{
          await payment()
        }catch(e){
            setloading(false)
            console.log(e)
        }
    }
  return (
    <div className='w-full flex justify-center pt-10'>
           <div className='w-3/5 flex items-center space-x-10'>
                <div className='w-4/5'>
                    <PDF />

                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col items-center'>
                          <div className='flex flex-col space-y-3'>
                                <h5 className='text-4xl font-semibold'>Here’s Your Resume!</h5>
                                <h5 className='text-slate-600 font-light '>You can still make changes to your previously filled data</h5>
                         </div>

                         <div className='flex flex-col space-y-3 w-full py-4 items-center'>
                            {!isLoading?
                                       <button className='bg-black text-white py-2 rounded-full w-full text-sm' onClick={pay}>Proceed to payment</button>
                                       :
                                       <ClipLoader color='blue' size={14} />

                            }
                       
                               <button className='bg-white text-black py-2 rounded-full w-full border border-black text-sm'>Edit</button>

                         </div>

                    </div>
                    
                </div>

           </div>


    </div>
  )
}



const PDF=()=>{
    return(
        <div className='w-full flex justify-center'>
        <div className='w-full  relative' style={{background:"#fcfbf7",height:"600px"}}>
           <div className='w-full h-full px-12 py-12 text-slate-400 flex space-y-6 flex-col' style={{color:"#9d9c9a"}}>
                   <div className='border-b border-black pb-4 flex flex-col space-y-3 '>
                         <h5 className='text-2xl font-semibold'>JANE SMITHERTON</h5>
                         <h5 className='text-sm font-bold'>FRONTEND ENGINEER</h5>
                         <p className='text-sm font-light'>I am an experienced Frontend engineer seeking a full-time position in the field of web development and design, where I can apply my knowledge and skills for continuous improvement.</p>

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
                                      <div className='flex flex-col'>
                                         <h5 className=' font-semibold'>University</h5>
                                         <p className='text-sm font-light'>
                                            Bacholor of science

                                         </p>

                                      </div>


                                </div>

                         </div>

                         <div className='border-b border-black pb-4 flex  py-4 w-full'>
                                <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>Experience</h5>
                                <div className='flex flex-col  w-1/2'>
                                      <div className='flex flex-col'>
                                         <h5 className=' font-semibold'>Frontend Engineer</h5>
                                         <p className='text-sm font-light'>
                                            Bacholor of science

                                         </p>

                                      </div>


                                </div>

                         </div>

                        
                         <div className='border-b border-black pb-4 flex  py-4 w-full'>
                                <h5 className=' font-semibold text-sm w-1/2' style={{color:"#9d9c9a"}}>Contact</h5>
                                <div className='flex flex-col  w-1/2'>
                                      <div className='flex flex-col font-light'>
                                         <h5>Email</h5>
                                      </div>


                                </div>

                         </div>


           </div>
       

       </div>
      

</div>
    )
}
