import React ,{useRef,useState} from 'react'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import pdfToText from "react-pdftotext";
import {gptApi} from "../api/gpt"
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
export default function Select() {
    const hiddenFileInput = useRef()
    const [files,setFile]=useState()
    const [loading,setloading]=useState(false)

    const navigate=useNavigate()
     
    const handleClick = event => {
            hiddenFileInput.current.click()
        }

        const handleChange = async(e)=> {
            setloading(true)
            const dir = e.target.files[0]
            console.log(dir,"dir")
      
             setFile(dir)
             let res=""


             pdfToText(dir)
             .then(async(text) => {
                 console.log(text,"text")
                 const prompt = `The following text is an unstructured resume containing various sections such as contact information, experience, education, projects, skills, awards, and languages. Your task is to categorize the text into these sections and structure the output in a clear and organized manner.if a section is not available,make no comment,leave as blank.Also for highlighting headers,subtitles etc use only an asteries not hash or any other.Basically i want the output to be exactly in this format,${output}. Input:${text}`
                  res=await gptApi.sendMsg(prompt)
                 console.log(res,"res")
                 const resumeObject = res?.length>0&&parseResume(res);
                 console.log(resumeObject);
                 setloading(false)
                 if(resumeObject===null || resumeObject=={}){
                    toast.error("Retry!",{duration:3000})
                 }else{
                    navigate("/resume",{state:resumeObject})
                 }
                 
             }
             )
             .catch((error) => {
                console.error("Failed to extract text from pdf")

                setloading(false)
                toast.error("Failed to extract text from pdf!Retry!",{duration:3000})
            });
     

             
               

    
        }
        function parseResume(input) {
            // Parsing the contact information
            console.log(input ,"here")
            const cleanedInput = input.replace(/\s+/g, ' ').replace(/\*\*/g, '').trim();

            // Parsing the contact information
            const contactInfoRegex = /Contact Information: - Name: (.+?) - Address: (.+?) - Phone: (.+?) - Email: (.+?)(?=\s\w+|$)/;
            const contactMatch = cleanedInput.match(contactInfoRegex);
        
            
            const contactInfo = contactMatch ? {
                name: contactMatch[1].trim(),
                address: contactMatch[2].trim(),
                phone: contactMatch[3].trim(),
                email: contactMatch[4].trim()
            } : {};
            console.log(contactInfo)
            const experienceRegex = /(\d+)\. Company: (.*?) - Job Title: (.*?) - Duration: (.*?) - Responsibilities: (.*?)(?=(\d+\.|$))/g;

            const experiences = [];

                // Use the regex to match and extract each experience
                let match;
                while ((match = experienceRegex.exec(cleanedInput)) !== null) {
                    const experience = {
                        company: match[2].trim(),
                        jobTitle: match[3].trim(),
                        duration: match[4].trim(),
                        responsibilities: match[5].trim()
                    };
                    experiences.push(experience);
                }

                console.log(experiences)


                const educationRegex = /(\d+)\. School Name: (.*?) - Degree: (.*?) - Duration: (.*?) - Curriculum: (.*?)(?=(\d+\.|$))/g;

                // Initialize an array to hold the extracted education entries
                const educationArray = [];
            
                // Use the regex to match and extract each education entry
                let matchEdu;
                while ((matchEdu = educationRegex.exec(cleanedInput)) !== null) {
                    const education = {
                        schoolName: matchEdu[2].trim(),
                        degree: matchEdu[3].trim(),
                        duration: matchEdu[4].trim(),
                        curriculum: matchEdu[5].trim()
                    };
                    educationArray.push(education);
                }
            
                console.log(educationArray)

                const regex = /^-\s*(.*?)\s*\.$/gm;

                   
                    let items = [];

                    let matchSkills;
                    while ((matchSkills= regex.exec(input)) !== null) {
                        
                        if (matchSkills[1]) {
                 
                            items.push(matchSkills[1]);
                        }
                    }

        
                    console.log(items);
                    return{
                        ...contactInfo,
                        education:educationArray,
                        skills:items,
                        experiences
                    }

        }

    
        
  return (
    <Layout>
             <div className='pt-20 w-full flex justify-center px-4 md:px-0'>
                    <div className='flex md:flex-row flex-col lg:w-3/5 w-full md:space-x-10 space-y-6 md:space-y-0'>
                           <Link to="/resume">
                           <div className='border flex flex-col py-4 px-4 rounded-lg space-y-4'>
                                   <div className='flex justify-end'>
                                      <input 
                                         type={"radio"}
                                      />
                                   </div>
                                   <div className='flex flex-col items-center w-full space-y-1 py-8'>
                                        <h5 className='font-semibold text-xl'>Start from scratch</h5>
                                        <p className='text-center w-3/4 font-light text-sm'>we can assist you in build your resume from start to finish</p>

                                   </div>
                                
                            </div>
                           </Link>
                       




                            <div className='border flex flex-col py-4 px-4 rounded-lg space-y-4'
                              onClick={handleClick}
                            >
                                   <div className='flex justify-end'>
                                    {loading?
                                      <ClipLoader  color='black' size={12}/>
                                      :
                                      <input 
                                      type={"radio"}
                                   />

                                    }
                                   
                                        <input
                                          type="file"
                                          accept="application/pdf"
                                          className='hidden'
                                          ref={hiddenFileInput}
                                           onChange={handleChange}
                                         />
                                   </div>
                                   <div className='flex flex-col items-center w-full space-y-1 py-8'>
                                        <h5 className='font-semibold text-xl'>Upload an existing resume</h5>
                                        <p className='text-center w-3/4 font-light text-sm'>we can assist you in build your resume 
                                              from start to finish
                                          </p>

                                   </div>
                                
                            </div>


                    </div>

             </div>

    </Layout>
  
  )
}


const output=`**Contact Information:**
- Name: Bartholomew Onogwu
- Address: 123 Your Street, Your City, ST 12345
- Phone: (123) 456-7890
- Email: no_reply@example.com

**Experience:**
1. **Company:** Location
   - **Job Title**
   - **Duration:** MONTH 20XX - Present
   - Responsibilities: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.

2. **Company:** Location
   - **Job Title**
   - **Duration:** MONTH 20XX - MONTH 20XX
   - Responsibilities: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.

3. **Company:** Location
   - **Job Title**
   - **Duration:** MONTH 20XX - MONTH 20XX
   - Responsibilities: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.

**Education:**
1. **School Name:** Location
   - **Degree**
   - **Duration:** MONTH 20XX - MONTH 20XX
   - Curriculum: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.

2. **School Name:** Location
   - **Degree**
   - **Duration:** MONTH 20XX - MONTH 20XX
   - Curriculum: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.

**Projects:**
- **Project Name:** Detail
  - Description: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

**Skills:**
- Lorem ipsum dolor sit amet.
- Consectetuer adipiscing elit.
- Sed diam nonummy nibh euismod tincidunt.
- Laoreet dolore magna aliquam erat volutpat.

**Awards:**
1. Lorem ipsum dolor sit amet
   - Consectetuer adipiscing elit,
   - Sed diam nonummy Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
   
2. Lorem ipsum dolor sit amet
   - Consectetuer adipiscing elit,
   - Sed diam nonummy Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

**Languages:**
- Lorem ipsum
- Dolor sit amet
- Consectetuer res
`