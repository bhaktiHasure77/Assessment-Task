import React from 'react'
import styles from './Platform.module.css'
import group71 from '../assets/group71.png'
import { FaCheckDouble } from 'react-icons/fa'

const Platform = () => {
  return (
    <div>
        <section className={styles.wrapper}>
      <div className={styles.cardArea}>
        <div className={styles.mainCard}>
          <img
            src={group71}
            alt="Group"
            className={styles.mainAvatar}
          />
          <div className={styles.name}></div>
          <span className={styles.badge}></span>

          
        </div>
      </div>

      <div className={styles.textArea}>
        <h2>
          Platform <span>Features</span> That <br />
          Empower Your Learning
        </h2>

        <ul>
          <li><FaCheckDouble /> Live learning and interactive tools</li>
          <li><FaCheckDouble /> Mobile-friendly access</li>
          <li><FaCheckDouble /> On-demand content</li>
          <li><FaCheckDouble /> Personalized learning paths</li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default Platform