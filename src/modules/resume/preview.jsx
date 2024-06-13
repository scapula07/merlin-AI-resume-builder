import React from 'react'
import { BsDot } from "react-icons/bs";


export default function Preview({params,setParam}) {
  return (
    <div className='w-full flex justify-center'>
             <div className=' opacity-60 relative' style={{background:"#e3e2de",width:"450px"}}>
                <div className='w-full h-full px-12 py-16 text-slate-400' style={{color:"#9d9c9a"}}>
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
                  <div className='w-full h-full absolute top-0  flex items-center justify-center '>
                        <button className='text-rose-900 border-2 border-rose-900 px-6 py-2 text-lg rounded-full'>Preview</button>

                  </div>

            </div>
           

    </div>
  )
}
