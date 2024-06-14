import React from 'react'
import Header from '../../components/header'

import { Toaster } from 'react-hot-toast'

export default function Layout({children}) {
  return (
    <div className='w-full h-full relative '>
         <div className='fixed w-full z-50 '>
            <Header />
         </div>
        <div className='w-full md:pt-20 h-full  pt-10 overflow-x-hidden'>
            {children}

        </div>

      <Toaster />
    </div>
  )
}
