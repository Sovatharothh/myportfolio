import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets//profile.png"
          alt="Roth"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/datascience.png"
              alt="datascience icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Data Science</h3>
              <p>
                I apply machine learning, data analysis, visualization, and predictive modeling to solve real-world problems. My tools of choice include Python, Pandas, NumPy, Scikit-learn, and Matplotlib.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/backend.png"
              alt="backend icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I develop fast, scalable backend systems and APIs using Node.js and FastAPI.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img
              src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/frontend.png"
              alt="frontend icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I build responsive and performant user interfaces using HTML, CSS, JavaScript, and ReactJS.
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img
              src="https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/ui.png"
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I design clean and modern interfaces, and create scalable design systems to ensure consistent user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
