import React from 'react'
import styles from "./WhyLearn.module.css"

import coursesImg from '../assets/courses.png'
import learnersImg from '../assets/learners.png'
import liveImg from '../assets/live.png'    


const WhyLearn = () => {
  return (
    <div>
        <section className={styles.section}>
      <h2 className={styles.heading}>
        Why <span>learn</span> with our courses?
      </h2>

      <p className={styles.subheading}>
        Join millions of learners and experience top-notch education <br />
        with expert instructors and real-time learning.
      </p>

      <div className={styles.stats}>
        <div className={styles.card}>
          <img src={coursesImg} alt="Top Courses" />
          <h3>100+</h3>
          <h4>Top Courses</h4>
          <p>
            Take courses from the world’s best instructors and universities.
          </p>
        </div>

        <div className={styles.card}>
          <img src={learnersImg} alt="Happy Learners" />
          <h3>10 M+</h3>
          <h4>Happy Learners</h4>
          <p>Learn from all around the world.</p>
        </div>

        <div className={styles.card}>
          <img src={liveImg} alt="Live Learning" />
          <h3>507M+ Hrs</h3>
          <h4>Live Learning</h4>
          <p>
            Learn your favorite courses live with world-class instructors in
            real-time.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhyLearn
