import React from 'react'
import Card from './MotionCard'
import {Resume,Navbar,About,Experience,Works,Hero, Tech,Contact, Feedbacks} from './components' 
const Body = () => {
  return (

    <div className='relative z-0'>
    {/* <Example/> */}

    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

    <Navbar/>
    
    </div>
   
    <Hero/>
    <Resume/>
    <About/> 
    <Experience/>
    <Works/>
     

<Tech/>

<Contact/>

    {/* <Card/> */}
   </div>
  )
}

export default Body