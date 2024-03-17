import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { resume100 } from '../assets';
const ServiceCard = ({ index,icon}) => (
  <Tilt className='xs:w-[250px] w-full mx-auto my-auto '>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ml-4'
      >
        <img
          src={resume100}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          Resume
        </h3>
      
        <h3 className='text-white text-[20px] font-light text-center'>
          <a href="https://drive.google.com/file/d/16t1CjoQrv-Ukt6qkoDG9SaYO8seOgjxA/view">Link</a>  
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const Resume = () => {
  return (
    <div>


    <ServiceCard/>
   </div>
  )
}


// export default Resume
export default SectionWrapper(Resume, "resume");
