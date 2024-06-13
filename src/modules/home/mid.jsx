import React from 'react'
import text from "../../assets/text4.png"
import text2 from "../../assets/text3.png"
import { IoClose } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
export default function Mid() {
  return (
    <div className='w-full  py-24 flex justify-center' style={{ background: "linear-gradient(100.52deg, #66C9FA 15.93%, #3C7794 141.45%)",height:"450px"}}>
           <div className='w-3/5 h-full flex flex-col items-center'>
                 <h5 className='text-6xl font-semibold '>Tailored Resumes in Minutes</h5>

                 <div className='flex items-center space-x-4 py-10'>
                 <img src={text} className="" />
                          <div className='bg-white rounded-lg px-16 py-10 flex items-center justify-center'>
                             <button className='flex items-center bg-black px-4 py-2.5 text-white text-sm space-x-3 rounded-lg'>
                                 <FiZap
                                     className='rounded-full text-black'
                                    style={{ background: "linear-gradient(100.52deg, #66C9FA 15.93%, #3C7794 141.45%)"}}
                                 />
                                  <span>Upload Resume</span>
                                  <IoClose />
                             </button>

                        </div>
                 <img src={text2} className="" />
                      

                 </div>
                 <h5 className='text-black w-4/5 text-center font-light'>A solution to help you attain your dream job! Not confident in your in your article writing ability? let us help you.</h5>

           </div>

    </div>
  )
}
