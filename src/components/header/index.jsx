import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  const pathname =window.location.pathname
  console.log(pathname,"pathname")
  return (
    <div className={pathname ==="/"?'w-full px-10 py-6 bg-black text-white':"w-full px-10 py-6 bg-white "}>
           <div className='flex w-full items-center justify-between'> 
                  <div className='flex justify-center w-1/6'>
                      <img src={logo} className="h-14 w-14"/>

                  </div>

                  <div className='flex items-center justify-between justify-center w-2/5'>
                      {[
                        {name:"About"},
                        {name:"Pricing"},
                        {name:"How it works"},
                        {name:"Solution"},
                        {name:"Features"},


                      ]?.map((nav)=>{
                         return(
                            <h5>{nav?.name}</h5>
                         )
                      })

                      }
                    
                 </div>
                <div className="w-1/3 flex items-center space-x-4 justify-end ">
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
