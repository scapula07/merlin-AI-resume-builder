import React from 'react'

export default function Work({params,setParam,works,setWork}) {
  return (
    <div className='w-full '>
         <h5 className='md:text-2xl text-sm font-semibold'>Work Experience</h5>

         <div className='md:grid md:grid-flow-row md:grid-cols-2  md:gap-4 md:gap-y-8 py-4 flex flex-col'>
             {[
                {
                    label:"Job title",
                    onChange:(e)=>setWork(
                        {
                         ...works,
                         job:e.target.value
                        }
                    )

                },
                {
                    label:"Employer",
                    onChange:(e)=>setWork(
                        {
                            ...works,
                        employer:e.target.value
                        }
                    )

                },
                {
                    label:"Country",
                    onChange:(e)=>setWork(
                        {
                            ...works,
                        jobcountry:e.target.value
                        }
                    )

                },
                {
                    label:"City",
                    onChange:(e)=>setWork(
                        {
                            ...works,
                        jobcity:e.target.value
                        }
                    )

                },
                {
                    label:"Start date",
                    onChange:(e)=>setWork(
                        {
                            ...works,
                         startDate:e.target.value
                        }
                    )

                },
                {
                    label:"End date",
                    onChange:(e)=>setWork(
                        {
                            ...works,
                        endDate:e.target.value
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
