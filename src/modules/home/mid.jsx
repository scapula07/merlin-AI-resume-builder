import React from 'react'
import text from "../../assets/text4.png"
import text2 from "../../assets/text3.png"
import { IoClose } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Mid() {
  return (
    <div className='w-full  py-24 flex justify-center' style={{ background: "linear-gradient(100.52deg, #66C9FA 15.93%, #3C7794 141.45%)",height:"450px"}}>
           <div className='w-3/5 h-full flex flex-col items-center'>
                 <h5 className='md:text-6xl text-lg font-semibold '>Tailored Resumes in Minutes</h5>

                 <div className='flex items-center space-x-4 py-10'>
                 <img src={text} className="md:flex hidden" />
                          <div className='bg-white rounded-lg px-16 md:py-10 py-6 flex items-center justify-center'>
                            <Link to="/select">
                            <button className='flex items-center bg-black md:px-4 px-1 py-2.5 text-white md:text-sm text-xs md:space-x-3 rounded-lg'>
                                 <FiZap
                                     className='rounded-full text-black md:block hidden'
                                    style={{ background: "linear-gradient(100.52deg, #66C9FA 15.93%, #3C7794 141.45%)"}}
                                 />
                                  <span>Upload Resume</span>
                                  <IoClose 
                                      className=' md:block hidden'
                                  />
                             </button>
                            
                            </Link>
                           

                        </div>
                 <img src={text2}  className="md:flex hidden"  />
                      

                 </div>
                 <h5 className='text-black md:w-4/5 w-full text-xs md:text-sm text-center font-light'>A solution to help you attain your dream job! Not confident in your in your article writing ability? let us help you.</h5>

           </div>

    </div>
  )
}
