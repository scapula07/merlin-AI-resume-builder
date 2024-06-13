import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaTwitter ,FaPinterest,FaReddit,FaLinkedin} from "react-icons/fa6";
import img1 from "../../assets/social1.png"
import img2 from "../../assets/social3.png"
import img3 from "../../assets/social2.png"

export default function Social() {
  return (
    <div className='w-full flex justify-center py-24' style={{background:"#fafafa"}}>
            <div className='w-3/5 flex flex-col items-center'>
                  <h5 className='text-6xl '>All platform connect to MG</h5>

                  <div className='flex items-center py-10 space-x-4'>
                    {[
                        <BsFacebook  className='text-blue-500 text-2xl'/>,
                        <FaTwitter className='text-blue-500 text-2xl' />,
                        <FaPinterest className='text-rose-500 text-2xl' />,
                        <FaReddit className='text-orange-500 text-2xl' />,
                        <FaLinkedin className='text-blue-500 text-2xl' />

                    ]?.map((icon)=>{
                          return(
                            <div className='bg-white flex items-center justify-center px-4 py-4 shadow rounded-lg'>
                                {icon}
                            </div>
                          )
                    })

                    }

                  </div>

                  <div className='flex flex-col w-full items-center'>
                  {[
                     img1,img2,img3
                    ]?.map((img)=>{
                          return(
                            <div className='w-2/3'>
                                   <img src={img}/>
                            </div>
                           
                          )
                    })

                    }

                  </div>

            </div>

    </div>
  )
}
