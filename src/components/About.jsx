import React from 'react'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import {services} from '../constants/index'
import {fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
    options={{max: 45, scale: 1, speed: 450}} 
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center'>
    <img src={icon} alt={title} className="w-40 h-40 object-contain mb-4"/>
    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
     </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
      Danik Collin, a French and English-speaking IT professional with 5+ years of experience, 
      specializes in database development, administration, and analytics, 
      leveraging Microsoft certifications and proficiency in SQL Server, BI tools like PowerBI, 
      SSIS, SSRS, and diverse programming languages.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')