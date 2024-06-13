import React from 'react'
import Layout from '../layout'
import Mid from './mid'
import Top from './top'
import Partners from './partners'
import Social from './social'
import Sub from './sub'

export default function Home() {
  return (
    <Layout>
      
      <div className='w-full h-full  '>
          <Top />
          <Mid />
          <Partners />
          <Social />
          <Sub />

      </div>

    </Layout>
   
  )
}
