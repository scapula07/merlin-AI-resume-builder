import React from 'react'
import { BsMenuUp } from 'react-icons/bs'
import text from "../../assets/text2.png"
import cards from "../../assets/cards.png"
import frame from "../../assets/frame.png"
import { Link } from 'react-router-dom'
export default function Top() {
  return (
    <div className='w-full bg-black' style={{height:"570px"}}>
          <div className='pt-20 relative w-full h-full bg-black'>
               <img src={frame} className="w-full h-full"/>
                <div className='absolute top-0 w-full  h-full'>
                         <div className='w-full flex justify-center py-20 bg-blackk'>
                                  <div className='md:w-3/5 w-4/5  flex flex-col items-center'>
                                          <div className='flex flex-col items-center space-y-2 w-full'>
                                               <h5 className='md:text-6xl text-4xl text-white font-semibold'>Transform Your Job Search <br></br>with AI-Powered Resumes</h5>
                                               <h5 className='text-slate-500 font-light text-center w-4/5 text-xs md:text-sm'>“Unlock your Career Potential with Ai: Effortlessly Create Professional Resumes That get Noticed.”</h5>

                                          </div>
                                          <div className='flex py-6 items-center '>
                                              <div className='pt-10'>
                                                <Link to="/select">
                                          
                                                  <button className='px-8 py-2 rounded-full text-xs md:text-sm' style={{ background: "linear-gradient(100.52deg, #66C9FA 15.93%, #3C7794 141.45%)"}}>Get started</button>
                                                  </Link>
                                              </div>
                               
                                               <img src={text} className="md:w-20 w-10" />

                                          </div>
                                          <div className='md:flex hidden'>
                                              <img src={cards}/>
                                          </div>

                                  </div>

                         </div>

                </div>

          </div>

    </div>
  )
}
