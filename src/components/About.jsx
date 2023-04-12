import React from 'react'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import {certs, exams, services} from '../constants/index'
import {fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'

import { SectionWrapper } from '../hoc'

const CertsCard = ({index, title, icon, link}) => {

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
    onClick={handleClick}   
    options={{max: 45, scale: 1, speed: 450}} 
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center cursor-pointer'>
    <img src={icon} alt={title} className="w-40 h-40 object-contain mb-4"/>
    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
     </div>
      </motion.div>
    </Tilt>
  )
}


const ExamsCard = ({index, title, number}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
    options={{max: 45, scale: 1, speed: 450}} 
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center'>
    <h3>{number}</h3>
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
        <h2 className={styles.sectionHeadText}>Certification.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
      As a seasoned IT professional, I have honed my skills in database development, 
      administration, and analytics over the course of 5+ years. 
      My expertise in Microsoft technologies is supported by my MCSA and MCSE certifications, 
      which complement my proficiency in SQL Server, BI tools such as PowerBI, SSIS, SSRS, 
      and multiple programming languages. This combination of skills and certifications enables me to deliver
       exceptional results in my work.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-20'>
        {certs.map((cert, index) => (
          <CertsCard key={cert.title} index={index} {...cert}/>
        ))}
      </div>
      
      <motion.div className='mt-20'>

        <h3 className={styles.sectionHeadText}>Exams.</h3>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-20'>
        {exams.map((exam, index) => (
          <ExamsCard key={exam.title} index={index} {...exam} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')