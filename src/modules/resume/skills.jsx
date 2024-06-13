import React ,{useState} from 'react'
import { HiOutlinePencil } from "react-icons/hi2";
import { gptApi } from '../api/gpt';
import { ClipLoader } from 'react-spinners';
import { BsDot } from "react-icons/bs";
export default function Skills({params,setParam}) {
      const [isLoading,setloading]=useState(false)
      const [text,setText]=useState("")

      function convertToArray(str) {
        // Use regex to split the string by digits followed by a period and a space
        const items = str.split(/\d+\.\s+/).filter(Boolean);
        return items;
      }


     const generate=async()=>{
          setloading(true)
         try{
            const res=await gptApi.sendMsg(text)
            console.log(res,"res")
            res?.length>0&&setloading(false)
            const resultArray = convertToArray(res);
            setParam({...params,skills:resultArray })

           }catch(e){
            console.log(e)
            setloading(false)
         }

     }
  return (
    <div className='w-full '>
         <h5 className='text-2xl font-semibold'>Skills</h5>

         <div className='w-full flex flex-col py-8 flex flex-col space-y-2'>
                <h5 className='text-sm font-semibold text-slate-600'>In bulleted points, tell us what you can do</h5>
                <div className='w-3/5 border h-56  rounded-lg flex flex-col px-6 py-3 justify-between'>
                      {/* <ol className='h-full h-44 overflow-y-scroll text-sm flex flex-col'>

                          {params?.skills?.map((skill)=>{
                             return(
                                <li className='flex items-center space-x-4 text-slate-600 text-xs'>
                                  <BsDot />
                                  {skill}
                                  </li>
                             )
                          })

                          }

                      </ol> */}
                       <textarea placeholder='Enter your skills' className='text-xs font-semibold  px-4 py-2 outline-none text-slate-600'
                         onClick={(e)=>setText(`${e.target.value}.Can you write me a list seperated in numbers of 5 hard skills a person in this position should possess. The list should be suitable for a resume(in first person)? Do not write "the end" at the end of the list`)}
                       />
                    

                       <div className='flex justify-center'>
                          {!isLoading?
                                   <h5 className='flex items-center space-x-1 text-blue-400 font-semibold'
                                   onClick={generate}
                                 >
                                 <HiOutlinePencil className='text-lg'/>
                                 <span className='text-sm'>Generate using AI</span>
                                    
                                 </h5>
                                 :
                                 <ClipLoader color='blue' size={12}/>


                          }
                         

                       </div>

                </div>

         </div>



    </div>
  )
}
