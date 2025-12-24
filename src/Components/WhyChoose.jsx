import React from 'react'
import styles from "./WhyChoose.module.css";
import { FaChalkboardTeacher, FaBook,  FaMobile, FaMoneyBill , FaRecordVinyl } from 'react-icons/fa';


const data = [
  {
    title: "Expert Instructors",
    desc: "Learn from top educators with years of experience in entrance exam coaching.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Study Material",
    desc: "Access meticulously curated content that covers all aspects of your syllabus.",
    icon: <FaBook />,
  },
  {
    title: "Live Classes",
    desc: "Participate in real-time classes where you can ask doubts and engage with peers.",
    icon: <FaRecordVinyl />,
  },
  {
    title: "Flexible Learning",
    desc: "Study at your own pace with our recorded sessions and mobile-friendly platform.",
    icon: <FaMobile />,
  },
  {
    title: "Affordable Pricing",
    desc: "Get quality education at competitive prices with various subscription plans.",
    icon: <FaMoneyBill />,
  },
];

const WhyChoose = () => {
  return (
    <div>
          <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Why Choose <span>IFAS</span> Online?
      </h2>

      <p className={styles.subheading}>
        12,000+ unique online course list designs
      </p>

      <div className={styles.cards}>
        {data.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconCircle}>
              <span>{item.icon}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default WhyChoose
