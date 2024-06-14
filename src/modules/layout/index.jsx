import React from 'react'
import Header from '../../components/header'

import { Toaster } from 'react-hot-toast'

export default function Layout({children}) {
  return (
    <div className='w-full h-full relative '>
         <div className='fixed w-full z-50 '>
            <Header />
         </div>
        <div className='w-full pt-20 h-full'>
            {children}

        </div>

      <Toaster />
    </div>
  )
}
