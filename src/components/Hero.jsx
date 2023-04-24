import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#DC5F00]'></div>
          <div className='w-1 sm:h-80 h-40 orange-gradient'></div>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm  <span className='text-secondary'>Danik</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Empower your business with a bilingual database expert, <br className='sm:block hidden'></br>offering tailored SQL Server, PowerBI, and IT solutions
            to drive <br className='sm:block hidden'></br> your success.
            </p>
          </div>

      </div>
      <ComputersCanvas/>
      
      <div className="absolute text-center text-white font-bold text-xl" style={{ bottom: '14%', left: '50%', transform: 'translateX(-50%)' }}>
        Interact with me
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>
    </section>  
  )
}

export default Hero