import React from 'react'
import styles from './Testimonial.module.css'

const testimonials = [
{
name: "Ananya S.",
role: "GATE Life Sciences Student",
img: "https://i.pravatar.cc/100?img=47",
text: "IFAS provided a thorough and interactive learning experience. The structured study plans and regular practice tests boosted my confidence, helping me understand complex topics and excel in my exams. I highly recommend IFAS for anyone serious about their career.",
rating: 5,
},
{
name: "Ravi K.",
role: "CSIR NET Life Sciences Student",
img: "https://i.pravatar.cc/100?img=12",
text: "IFAS made my preparation journey smoother and more effective. The instructors are knowledgeable, and the regular assessments kept me on track. I gained a deeper understanding of the subject and felt more confident during my exams.",
rating: 4,
},
{
name: "Neha R.",
role: "IIT-JAM Biotechnology Student",
img: "https://i.pravatar.cc/100?img=32",
text: "The personalized support at IFAS was exceptional. I received clear explanations of tough concepts and felt well-prepared for the exam. The interactive format made learning enjoyable and productive.",
rating: 4,
},
];
const Testimonial = () => {
  return (
    <div>
        <section className={styles.wrapper}>
<h2 className={styles.title}>Testimonials</h2>
<p className={styles.subtitle}>What our student say about us</p>


<div className={styles.cards}>
{testimonials.map((t, i) => (
<div className={styles.card} key={i}>
<div className={styles.header}>
<img src={t.img} alt={t.name} />
<div>
<h4>{t.name}</h4>
<span>{t.role}</span>
</div>
</div>
<p className={styles.text}>{t.text}</p>
<div className={styles.stars}>
{Array.from({ length: 5 }).map((_, idx) => (
<span
key={idx}
className={idx < t.rating ? styles.filled : styles.empty}
>
★
</span>
))}
</div>
</div>
))}
</div>
</section>
    </div>
  )
}

export default Testimonial