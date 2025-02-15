import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("About/profile.png")}
          alt="Roth"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("About/datascience.png")} alt="datascience icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
              I have experience in applying Machine Learning, Data Analysis, Visualization, and Predictive Modeling to extract insights and build data-driven solutions using Python, Pandas, NumPy, Scikit-learn, and Matplotlib.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/backend.png")} alt="backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
              I have experiences in developing fast and optimised back-end systems
              and APIs by using NodeJS and FastAPI.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/frontend.png")} alt="frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experiences in building responsive
                and optimized sites by using ReactJS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("About/ui.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I have designed multiple landing pages and developed scalable design systems for consistent user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};