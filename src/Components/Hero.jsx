import React from 'react'
import styles from './Hero.module.css'
import student from '../assets/student.png'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
      
      <div className={styles.left}>
        <h1>
          Achieve Success <br />
          with <span>India’s No.1</span> <br />
          Online Exam <br />
          Institute
        </h1>

        <p className={styles.subtitle}>
          JOIN THOUSANDS OF SUCCESSFUL STUDENTS WHO HAVE <br />
          CRACKED THEIR ENTRANCE EXAMS WITH OUR EXPERT-LED <br />
          ONLINE COURSES.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>Explore Courses</button>
          <button className={styles.secondary}>
            Start Learning for Free
          </button>
        </div>
      </div>

      
      <div className={styles.right}>
        <div className={styles.testimonial}>
          <h4>Dadasaheb Sondge</h4>
          <p>
            Led by CEO Dadasaheb Sondge, IFAS Publications delivers
            quality educational materials, empowering students and
            educators to shape future leaders through innovation.
          </p>

          <FaStar  color='yellow'/>
          <FaStar  color='yellow'/>
          <FaStar  color='yellow'/>
          <FaStar  color='yellow'/>  
          <FaStar  color='yellow'/>
        </div>

        <img src={student} alt="Student using laptop"className='style.image' />
      </div>
    </section>
    </div>
  )
}

export default Hero