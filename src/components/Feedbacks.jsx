import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { educations } from '../constants'

// const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
//   <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
//     <p className='text-white font-black text-[48px]'>"</p>
    
//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'> 
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>
//         <img className='w-10 h-10 rounded-full object-cover' src={image} alt={`feedback-by-${name}`}/>
//       </div>
//     </div>
//   </motion.div>
// )

const FeedbackCard = ({index, title, school, date}) => (
  <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
    <p className='text-white font-black text-[28px]'>{title}</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{school}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='mt-1 text-secondary text-[12px]'>
            {date}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} text-secondary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My journey so far
          </p>
          <h2 className={styles.sectionHeadText}>
            Education.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.title} index={index} {...education}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')