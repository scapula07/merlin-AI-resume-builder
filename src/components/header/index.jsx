import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  const pathname =window.location.pathname
  console.log(pathname,"pathname")
  return (
    <div className={pathname ==="/"?'w-full px-10 md:py-6 bg-black text-white py-2':"w-full px-10 md:py-6  py-2 bg-white overflow-x-hidden"}>
           <div className='flex w-full items-center justify-between'> 
                  <div className='flex justify-center md:w-1/6  '>
                      <img src={logo} className="md:h-14 md:w-14 h-10 w-10"/>

                  </div>

                  <div className='hidden items-center justify-between justify-center w-2/5 md:flex'>
                      {[
                        {name:"About",link:"/"},
                        {name:"Pricing",link:"/"},
                        {name:"How it works",link:"/"},
                        {name:"Solution",link:"/resume"},
                        {name:"Features",link:"/"},


                      ]?.map((nav)=>{
                         return(
                          <Link to={nav?.link}>
                               <h5>{nav?.name}</h5>
                          </Link>
                           
                         )
                      })

                      }
                    
                 </div>
                <div className="md:w-1/3 md:flex hidden items-center space-x-4 md:justify-end ">
                  <Link to={"/login"}>
                  <h5>Login</h5>
                  </Link>
                  <Link to={"/signup"}>
                    <button className={pathname ==="/"?'bg-white  py-2.5 px-4 rounded-full text-black text-sm':'bg-black py-2.5 px-4 rounded-full text-white text-sm'}>Register</button>
                  </Link>
                     

                
                </div>

           </div>

    </div>
  )
}
