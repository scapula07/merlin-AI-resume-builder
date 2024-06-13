import React from 'react'

export default function Education({params,setParam}) {
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Education</h5>

         <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 py-4'>
             {[
                {
                    label:"School Name",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            schoolName:e.target.value
                        }
                    )

                },
                {
                    label:"Degree",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            degree:e.target.value
                        }
                    )

                },
                {
                    label:"School location",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            schoolLocation:e.target.value
                        }
                    )

                },
                {
                    label:"Field of study",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            studyField:e.target.value
                        }
                    )

                },
                {
                    label:"Graduate Date(month)",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            gradMonth:e.target.value
                        }
                    )

                },
                {
                    label:"Graduate Date(Year)",
                    onChange:(e)=>setParam(
                        {
                            ...params,
                            gradYr:e.target.value
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
