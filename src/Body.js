import React from 'react'
import Card from './MotionCard'
import {Navbar,About,Experience,Works,Hero, Tech,Contact} from './components' 
const Body = () => {
  return (

    <div>
    {/* <Example/> */}

    <div>
    <Navbar/>
    
    </div>
    <Hero/>
    <Works/>
    <About/>   
<Experience/>
<Tech/>

<Contact/>
    <Card/>
   </div>
  )
}

export default Body