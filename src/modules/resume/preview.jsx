import React from 'react'

export default function Preview({params,setParam}) {
  return (
    <div className='w-full flex justify-center'>
             <div className='w-6/7 h-96 relative' style={{background:"#e3e2de",height:"600px"}}>
                <div className='w-full h-full px-12 py-8 text-slate-400' style={{color:"#9d9c9a"}}>
                        <div className='border-b-2 border-slate-700 pb-4 flex flex-col space-y-3 '>
                              <h5 className='text-2xl font-semibold'>JANE SMITHERTON</h5>
                              <h5 className='text-sm font-bold'>FRONTEND ENGINEER</h5>
                              <p className='text-sm font-light'>I am an experienced Frontend engineer seeking a full-time position in the field of web development and design, where I can apply my knowledge and skills for continuous improvement.</p>

                        </div>

                        <div className='border-b-2 border-slate-700 pb-4 flex  '>


                        </div>


                </div>
                  <div className='w-full h-full absolute top-0 blur-70 flex items-center justify-center'>
                        <button className='text-rose-900 border-2 border-rose-900 px-6 py-2 text-lg rounded-full'>Preview</button>

                  </div>

            </div>
           

    </div>
  )
}
