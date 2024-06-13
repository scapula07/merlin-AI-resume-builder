import React from 'react'

export default function Contact({params,setParam}) {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Contact Info</h5>

         <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 py-4'>
             {[
                {
                    label:"First name",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            firstname:e.target.value
                        }
                    )

                },
                {
                    label:"Last name",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        lastname:e.target.value
                        }
                    )

                },
                {
                    label:"Email address",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            email:e.target.value
                        }
                    )

                },
                {
                    label:"Phone Number",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            phone:e.target.value
                        }
                    )

                },
                {
                    label:"Country",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            country:e.target.value
                        }
                    )

                },
                {
                    label:"City",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            city:e.target.value
                        }
                    )

                }

               ]?.map((field)=>{
                 return(
                    <div className='flex flex-col space-y-3'>
                         <label className='text-sm'>{field?.label}</label>
                         <input className='py-2.5 text-sm text-slate-500 px-4 border rounded-lg'
                            onChange={(e)=>field?.onChange(e)}
                         />
                    </div>
                 )

             })

             }

         </div>

    </div>
  )
}
