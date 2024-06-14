import React from 'react'
import Layout from '../layout'
import Mid from './mid'
import Top from './top'
import Partners from './partners'
import Social from './social'
import Sub from './sub'
import Email from './email'

export default function Home() {
  return (
    <Layout>
      
      <div className='w-full h-full  '>
          <Top />
          <Mid />
          <Partners />
          <Social />
          <Sub />
          <Email />
          <div className='flex items-center justify-end bg-white py-4 w-full px-4 space-x-4'>
            {[
              "Privacy Policy",
              "Terms and Condition",
              "Contact Us",
              "Careers"
            ].map((nav)=>{
               return(
                <h5 className='text-black font-light md:text-sm text-xs'>{nav}</h5>
               )
            })

            }

          </div>

      </div>

    </Layout>
   
  )
}
