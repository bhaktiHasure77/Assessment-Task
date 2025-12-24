import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div>
        <section className={styles.wrapper}>
<div className={styles.overlay}>
<h2 className={styles.heading}>Subscribe to our newsletter</h2>
<p className={styles.text}>
Subscribe today to unlock a wealth of knowledge, delivered <br />
right to your email, and stay ahead of the curve with ease.
</p>


<div className={styles.form}>
<input
type="email"
placeholder="Enter your email"
className={styles.input}
/>
<button className={styles.button}>Subscribe</button>
</div>
</div>
</section>
    </div>
  )
}

export default Newsletter