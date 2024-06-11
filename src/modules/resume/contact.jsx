import React from 'react'

export default function Contact() {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Contact Info</h5>

         <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 py-4'>
             {[
                {
                    label:"First name"

                },
                {
                    label:"Last name"

                },
                {
                    label:"Email address"

                },
                {
                    label:"Phone Number"

                },
                {
                    label:"Country"

                },
                {
                    label:"City"

                }

               ]?.map((field)=>{
                 return(
                    <div className='flex flex-col space-y-3'>
                         <label>{field?.label}</label>
                         <input className='py-3 px-4 border rounded-lg'/>
                    </div>
                 )

             })

             }

         </div>

    </div>
  )
}
