import axios from "axios"
const baseUrl="https://kennel-stripe-apis.onrender.com"

const OPENAI_API_KEY = '' 
  
const apiUrl = 'https://api.openai.com/v1/chat/completions';

export const gptApi= {
    sendMsg:async function (text) {
          try{

            const requestData = {
                model: 'gpt-3.5-turbo',
                messages: [
                  {
                    role: 'system',
                    content: 'You are a helpful assistant.',
                  },
                  {
                    role: 'user',
                    content:text,
                  },
                ],
              };   const config = {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    },
                };
    
            
              
            
                const response= await axios.post(
                        apiUrl,
                        requestData,
                        config
                  )
                  return response.data?.choices[0]?.message?.content





            //   axios.post(apiUrl, requestData, {
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'Authorization': `Bearer ${OPENAI_API_KEY}`,
            //     },
            //   })
            //     .then(response => {
            //       console.log(response.data?.choices[0]?.message?.content);
            //       return response.data?.choices[0]?.message?.content
            //     })
            //     .catch(error => {
            //       console.error('Error:', error.response ? error.response.data : error.message);
            //     });
            

          }catch(e){
            console.log(e)
          }
    }
}
