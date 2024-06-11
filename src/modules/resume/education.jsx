import React from 'react'

export default function Education() {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Education</h5>

         <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 py-4'>
             {[
                {
                    label:"School Name"

                },
                {
                    label:"Degree"

                },
                {
                    label:"School location"

                },
                {
                    label:"Field of study"

                },
                {
                    label:"Graduate Date(month)"

                },
                {
                    label:"Graduate Date(Year)"

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
