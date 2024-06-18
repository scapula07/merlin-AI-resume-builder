import React ,{useState} from 'react'
import {payment} from "../api/stripe"
import { ClipLoader } from 'react-spinners';
import { BsDot } from "react-icons/bs";


export default function Download({params,setParam, setNext,experiences}) {
    const [isLoading,setloading]=useState(false)
    const pay=async()=>{
        setloading(true)
        try{
          await payment({...params,experiences:experiences})
        }catch(e){
            setloading(false)
            console.log(e)
        }
    }
  return (
    <div className='w-full flex justify-center pt-10 h-full'>
           <div className='w-10/12 flex items-center space-x-10 h-full'>
                <div className='w-4/5 md:flex hidden h-full'>
                    <PDF 
                           params={params}
                           setParam={setParam}
                           experiences={experiences}
                    />

                </div>
                <div className='md:w-1/2 w-full'>
                    <div className='flex flex-col items-center w-full'>
                          <div className='flex flex-col space-y-3 w-full'>
                                <h5 className='text-4xl font-semibold'>Here’s Your Resume!</h5>
                                <h5 className='text-slate-600 font-light '>You can still make changes to your previously filled data</h5>
                         </div>

                         <div className='flex flex-col space-y-3 w-full py-4 items-center'>
                            {!isLoading?
                                       <button className='bg-black text-white py-2 rounded-full w-full text-sm' onClick={pay}>Proceed to payment</button>
                                       :
                                       <ClipLoader color='blue' size={14} />

                            }
                       
                               <button className='bg-white text-black py-2 rounded-full w-full border border-black text-sm' onClick={()=>setNext(6)}>Edit</button>

                         </div>

                    </div>
                    
                </div>

           </div>


    </div>
  )
}



const PDF=({params,setParam, experiences})=>{
   function convertToArray(str) {
      // Use regex to split the string by digits followed by a period and a space
      const items = str.split(/\d+\.\s+/).filter(Boolean);
      return items;
    }
    return(
        <div className='w-full flex justify-center h-full'>
        <div className='w-full  relative' style={{background:"#fcfbf7",height:"600px"}}>
           <div className='w-full h-full px-12 py-12 text-slate-400 flex space-y-6 flex-col' style={{color:"#9d9c9a"}}>
           <div className='border-b-2 border-slate-700 pb-4 flex flex-col space-y-3 w-full '>
                              <h5 className='text-2xl font-semibold'>{params?.firstname?.toUpperCase() + " " + params?.lastname?.toUpperCase()}</h5>
                              <h5 className='text-sm font-bold'>FRONTEND ENGINEER</h5>
                              <p className='text-sm font-light'>{params?.summary}</p>

                        </div>
                        <div className='border-b border-black pb-4 flex  py-4 w-full'>
                         <h5 className=' font-semibold text-sm w-1/5' style={{color:"#9d9c9a"}}>SKILLS</h5>
                         <div className='flex flex-col  w-4/5 space-y-1.5'>
                            {params?.skills?.map((skill)=>{
                                 return(
                                    <h5 className='flex items-center text-xs font-light'>
                                         <BsDot className='text-black font-semibold text-lg'/>
                                         <span>{skill}</span>
                                        
                                    </h5>
                                 )
                            })

                            }

                         </div>

                        
                      


                   </div>

                   <div className='border-b border-black pb-4 flex  py-4 w-full'>
                                <h5 className=' font-semibold text-sm w-1/5' style={{color:"#9d9c9a"}}>Education</h5>
                                <div className='flex flex-col  w-4/5'>
                                      <div className='flex flex-col w-full '>
                                         <h5 className=' font-semibold text-sm pb-3'>{params?.schoolName?.toUpperCase()}</h5>
                                         <p className='text-sm font-light'>
                                            {params?.degree},{params?.studyField}

                                         </p>
                                         <h5 className='text-sm font-light'>{params?.schoolLocation} | {params?.gradYr} </h5>

                                      </div>


                                </div>

                            </div>
                          <section>
                      

                         <div className='border-b border-black pb-4 flex  py-4 w-full space-x-4'>
                                <h5 className=' font-semibold text-sm w-1/5' style={{color:"#9d9c9a"}}>Experience</h5>
                                <div className='flex flex-col  w-4/5 space-y-4'>
                              
                                      
                                   {
                                    experiences?.map((exp)=>{
                                       const resultArray =typeof(exp?.experiences) === typeof("") ? convertToArray(exp?.experiences):[]
                                        return(
                                          <div className='flex flex-col'>
                                                  <h5 className=' font-semibold text-sm '>{exp?.job}</h5>
                                                  <h5 className='font-light text-xs'>{exp?.employer},{exp?.startDate} - {exp?.endDate}</h5>
                                                  {typeof(exp?.experiences) != typeof("")?

                                                  
                                                <div className='flex flex-col py-2'>
                                                    {exp?.experiences?.map((experience)=>{
                                                        return(
                                                            <p className='font-light text-xs'>{experience}</p>
                                                        )
                                                   
                                                    })

                                                    }
                                                </div>
                                                :
                                                <div className='flex flex-col py-2'>
                                                         {resultArray?.map((experience)=>{
                                                            return(
                                                               <p className='font-light text-xs'>{experience}</p>
                                                            )
                                                      
                                                         })

                                                         }
                                                  </div>
                                                  }
                                                <h5 className='font-light text-xs'>{exp?.jobcountry},{exp?.jobcity} </h5>
   
                                                   </div>
                                             
                                                   )
                                                })
                                             }
                                  


                                </div>
                                </div>







                          </section>

                             

                        
                         <div className='border-b border-black pb-4 flex  py-4 w-full'>
                                <h5 className=' font-semibold text-sm w-1/5' style={{color:"#9d9c9a"}}>Contact</h5>
                                <div className='flex flex-col  w-4/5'>
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
}
