import { loadStripe } from "@stripe/stripe-js";

import Stripe from 'stripe';

export const stripe = new Stripe(
  
        "sk_test_51NkVchLw1sbPStKfBKjUPtpJMCgW0OaJELzoSsMYe4mUm0xcgdzpoXCaASB7PXU6UusmNH7t8hpviFwqJSfbHS2c00lOUueSVx",
      {
     
        apiVersion: '2022-11-15',
      
        appInfo: {
          name: 'Next.js Subscription Starter',
          version: '0.1.0'
        }
      }
    );
    
    
   export  const payment=async(params)=>{
    
    
        const hostname =window.location.host
    
      
    
        const redirect=hostname ==="localhost"? "http://localhost:3000" :`https://${hostname}`
    
    
        console.log("here")
          try{
    
    
                const customer = {
                  uuid: '',
                  email:''
                };
               const price=10 *100
              const session = await stripe.checkout.sessions.create({
                line_items: [
                  {
                    price_data: {
                      currency: 'usd',
                      product_data: {
                        name:`Resume`,
                    
                      },
                      unit_amount:price,
                    },
                    quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `https://merlin-resume.vercel.app/fallback`,
                cancel_url: `https://merlin-resume.vercel.app/fallback`
              });
            
    
              console.log("here 1")
              if (session) {
               
                   
                    localStorage.clear();
                    localStorage.setItem('stripe-session',JSON.stringify(session));
                    localStorage.setItem('doc-params',JSON.stringify(params));
                     window.location.href = session?.url;
                
    
                } else {
                  console.log("session")
              }
              

          }catch(e){
            console.log(e,"here error")
       
            
             
          }
    
        
    
      }




   export  const getPaymentStatus=async(id)=>{
    
    
    const hostname =window.location.host

  

    const redirect=hostname ==="localhost"? "http://localhost:3000" :`https://${hostname}`


    console.log("here")
      try{


         
                const session = await stripe.checkout.sessions.retrieve(
                      id
                  );
                  console.log(session,"Session")
                  return session?.payment_status

      }catch(e){
        console.log(e,"here error")
   
        
         
      }

    

  }