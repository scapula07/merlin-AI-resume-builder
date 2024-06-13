import React,{useState} from 'react'
import Layout from '../layout'
import { IoIosArrowForward } from "react-icons/io";
import Contact from './contact';
import Work from './work';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Summary from './summary';
import Preview from './preview';
import { IoIosArrowBack } from "react-icons/io";
import Download from './download';

export default function Resume() {
    const [next,setNext]=useState(1)
    const [params,setParam]=useState({
                                    firstname:"John",
                                    lastname:"Doe",
                                    experiences:[]
                                     })

    console.log(next,"params")

  return (
    <Layout>

            <div className='px-16 w-full h-full pt-14 pb-10'>
                  <div className='w-full'>
                       <h5 className='font-semibold text-xl'>Fill the information in the order to complete your resume</h5>
                       <h5 className=' font-light text-slate-700'>This will save you the stress of finding a template</h5>

                  </div>

                  <div className='flex items-center border-b-2 border-slate-300 pt-6 pb-3 space-x-6'>
                                {[{
                                    name:"Contact info",
                                    no:1,
                                    onClick:(n)=>setNext(n)
                                },
                                {
                                    name:"Work Experience",
                                    no:2,
                                    onClick:(n)=>setNext(n)
                                },
                                {
                                    name:"Education",
                                    no:4,
                                    onClick:(n)=>setNext(n)
                                },
                                {
                                    name:"Skills",
                                    no:5,
                                    onClick:(n)=>setNext(n)
                                }
                            
                            
                            ]?.map((tab)=>{
                                    console.log(tab?.no==next,'here')
                                    return(
                                        <h5 className={tab?.no==next?'flex space-x-2 items-center text-blue-500 font-semibold':'flex space-x-2 items-center text-slate-600 font-light '} onClick={()=>tab?.onClick(tab?.no)}>
                                            <span className=' '>{tab?.name}</span>
                                            <IoIosArrowForward className='font-semibold ' /> 

                                        </h5>
                                    )
                                    })

                                }
                                    <h5 className={6==next?'flex space-x-2 items-center text-blue-500':'flex space-x-2 items-center text-slate-600 '} onClick={()=>setNext(6)}>
                                            Summary
                                            

                                </h5>

                  </div>


                  <div  className='flex flex-col w-full'>
                         {next !=7&&

                       
                           <div className='flex w-full space-x-14'>
                                 <div className='w-3/5 py-6'>
                                    {next==1&&<Contact 
                                                  params={params}
                                                  setParam={setParam}
                                                 />}
                                    {next==2&&<Work 
                                                    params={params}
                                                    setParam={setParam}
                                            />}
                                    {next==3&&<Experience
                                                     params={params}
                                                     setParam={setParam}
                                                  />}
                                    {next==4&&<Education 
                                                      params={params}
                                                      setParam={setParam}
                                                />}
                                    {next==5&&<Skills
                                                      params={params}
                                                      setParam={setParam}
                                                 />}
                                    {next==6&&<Summary
                                                     params={params}
                                                     setParam={setParam}
                                             />}
                                 </div>
                                 
                                  <div className='w-2/5 py-6'>
                                       <Preview
                                               params={params}
                                               setParam={setParam}
                                        />

                                  </div>
                            


                                 
                           </div>
                               }
                               {
                                next==7&& <Download />
                               }
                               


                           



                            <div className='flex items-center justify-between'>
                                <h5 className='flex items-center space-x-3 font-semibold text-sm' 
                                  onClick={()=>next !=1&&setNext(next-1)}
                                >
                                <IoIosArrowBack />
                                <span> Back</span>
                                   
                                </h5>
                                 {next !=7&&
                                        <button className='text-white bg-black text-sm rounded-full px-4 py-2 flex items-center space-x-3'
                                        onClick={()=>next !=7&&setNext(next+1)}
                                    >
                                  
                                    <span>Next</span>
                                    <IoIosArrowForward />
                                    </button>

                                 }
                             
                                
                            </div>

                  </div>


                
            </div>
    </Layout>

  )
}
