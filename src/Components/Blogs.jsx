import React from 'react'
import styles from './Blogs.module.css'
import Maskgroup1 from '../assets/maskgroup1.png'
import Maskgroup2 from '../assets/maskgroup2.png'
import Maskgroup3 from '../assets/maskgroup3.png'

const blogs = [
{
img: Maskgroup1,
author: "Ujjwal Tripathy",
date: "26 December 2024",
read: "8 Min",
title: "UGC NET Exam Pattern 2024: Paper 1 and 2 Marking Scheme and Key Instructions",
},
{
img: Maskgroup2,
author: "Siddharth Gangwar",
date: "24 December 2024",
read: "9 Min",
title: "JEST Application Form 2025, Application Fee, Apply Online Link",
},
{
img: Maskgroup3,
author: "Ujjwal Tripathy",
date: "22 December 2024",
read: "10 Min",
title: "UGC NET 2025: Notification, Application Form, Exam Dates, Eligibility, Pattern & Syllabus",
},
];

const Blogs = () => {
  return (
    <div>
        
        <section className={styles.wrapper}>
        <h2 className={styles.heading}>Latest <span>Blogs</span></h2>
        <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
        do eiusmod temporid unt ut labore veniam...
        </p>


    <div className={styles.cards}>
        {blogs.map((blogs) => (
        <div key={blogs.title} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={blogs.img} alt={blogs.title} />
            </div>


             <div className={styles.meta}>
                    <span>{blogs.author} / {blogs.date}</span>
                     <span>{blogs.read}</span>
             </div>


                     <h3 className={styles.title}>{blogs.title}</h3><br /><br />
        </div>
        ))}
    </div>
    </section>
    </div>
  )
}

export default Blogs