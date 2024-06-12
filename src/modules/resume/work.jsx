import React from 'react'

export default function Work({params,setParam}) {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Work Experience</h5>

         <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 py-4'>
             {[
                {
                    label:"Job title",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        job:e.target.value
                        }
                    )

                },
                {
                    label:"Employer",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        employer:e.target.value
                        }
                    )

                },
                {
                    label:"Country",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        jobcountry:e.target.value
                        }
                    )

                },
                {
                    label:"City",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        jobcity:e.target.value
                        }
                    )

                },
                {
                    label:"Start date",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                         startDate:e.target.value
                        }
                    )

                },
                {
                    label:"End date",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                        endDate:e.target.value
                        }
                    )

                }

               ]?.map((field)=>{
                 return(
                    <div className='flex flex-col space-y-3'>
                         <label>{field?.label}</label>
                         <input className='py-3 px-4 border rounded-lg'
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
