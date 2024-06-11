import React from 'react'
import Header from '../../components/header'

export default function Layout({children}) {
  return (
    <div className='w-full h-full relative '>
         <div className='fixed w-full '>
            <Header />
         </div>
        <div className='w-full pt-20 h-full'>
            {children}

        </div>


    </div>
  )
}
