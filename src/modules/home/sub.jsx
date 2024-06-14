import React from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

export default function Sub() {
  return (
    <div className='bg-black h-96 flex justify-center py-20'>
            <div className='flex flex-col items-center'>
                  <h5 className='md:text-4xl text-lg font-semibold  text-white'>Get your best deal</h5>
                  <div className='flex items-center space-x-4 text-white py-8'>
                    <h5 className='font-semibold md:text-sm text-xs'>Monthly</h5>

                  <Toggle
                    defaultChecked={false}
                    disabled={false}
                    icons={false}
                
                 />
                     <h5  className='font-semibold  md:text-sm text-xs'>Yearly</h5>

                  </div>
                


            </div>
          

    </div>
  )
}
