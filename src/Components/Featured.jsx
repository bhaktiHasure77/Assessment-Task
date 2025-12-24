import React from "react";
import styles from "./Featured.module.css";

import csir from "../assets/csir.png";
import ugc from "../assets/ugc.png";
import cuet from "../assets/cuet.png";
import gatb from "../assets/gatb.png";
import set from "../assets/set.png";
import iitjam from "../assets/iitjam.png";

const courses = [
  { title: "CSIR NET", count: "5 Courses", img: csir },
  { title: "UGC NET", count: "16 Courses", img: ugc },
  { title: "CUET PG", count: "76 Courses", img: cuet },
  { title: "GAT B", count: "22 Courses", img: gatb },
  { title: "SET", count: "110 Courses", img: set },
  { title: "IIT JAM", count: "85 Courses", img: iitjam },
];

const Featured = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Featured <span>Courses</span>
      </h2>

      <p className={styles.subheading}>
        Explore Our Range of Courses for In-Depth Learning and <br />
        Exam Success
      </p>

      <div className={styles.cards}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.logoBox}>
              <img src={course.img} alt={course.title} />
            </div>
            <h3>{course.title}</h3>
            <p>{course.count}</p>
          </div>
        ))}
      </div>

      <button className={styles.button}>View All Courses</button>
    </section>
  );
};

export default Featured;
