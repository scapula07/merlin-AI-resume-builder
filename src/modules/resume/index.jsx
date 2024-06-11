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

export default function Resume() {
    const [next,setNext]=useState(6)
  return (
    <Layout>

            <div className='px-16 w-full h-full pt-14 '>
                  <div className='w-full'>
                       <h5 className='font-semibold text-xl'>Fill the information in the order to complete your resume</h5>
                       <h5 className=' font-light text-slate-700'>This will save you the stress of finding a template</h5>

                  </div>

                  <div className='flex items-center border-b-2 border-slate-300 pt-6 pb-3 space-x-6'>
                                {[{
                                    name:"Contact info"
                                },
                                {
                                    name:"Work Experience"
                                },
                                {
                                    name:"Education"
                                },
                                {
                                    name:"Skills"
                                }
                            
                            
                            ]?.map((tab)=>{
                                    return(
                                        <h5 className='flex space-x-2 items-center'>
                                            <span className='font-semibold text-slate-600'>{tab?.name}</span>
                                            <IoIosArrowForward className='font-semibold text-slate-600' /> 

                                        </h5>
                                    )
                                    })

                                }
                                    <h5 className='font-semibold text-slate-600'>
                                            Summary
                                            

                                </h5>

                  </div>


                  <div  className='flex flex-col w-full'>
                           <div className='flex w-full'>
                                 <div className='w-3/5 py-6'>
                                    {next==1&&<Contact />}
                                    {next==2&&<Work/>}
                                    {next==3&&<Experience/>}
                                    {next==4&&<Education/>}
                                    {next==5&&<Skills/>}
                                    {next==6&&<Summary/>}
                                 </div>
                                 
                                  <div className='w-2/5 py-6'>
                                       <Preview />

                                  </div>

                           </div>
                           



                            <div>
                                
                            </div>

                  </div>


                
            </div>
    </Layout>

  )
}
