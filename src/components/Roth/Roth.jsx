import React from "react";

import styles from "./Roth.module.css";
import { getImageUrl } from "../../utils";

export const Roth = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <p>Hi, This is</p>
          <b className={styles.highlight}>ROTH TT</b>
        </h1>

        <h2>Backend Developer | Aspiring Data Scientist | ICT Graduate@AUPP</h2>
        <p className={styles.description}>
        I am a passionate backend developer and data enthusiast. I love learning new technologies, building exciting projects, and diving into data analysis and web scraping just for fun TT
        </p>
        <div className={styles.socialLinks}>
          <a href="https://t.me/Rothhel" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src={getImageUrl("Social Media/telegram.png")} alt="Telegram" />
          </a>
          <a href="https://www.linkedin.com/in/sovatharoth-hel/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src={getImageUrl("Social Media/linkedin.png")} alt="LinkedIn" />
          </a>
          <a href="mailto:sovatharoth@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src={getImageUrl("Social Media/gmail.png")} alt="Email" />
          </a>
          <a href="https://github.com/Sovatharothh" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img src={getImageUrl("Social Media/GitHub.png")} alt="GitHub" />
          </a>
        </div>
        <a href="https://t.me/Rothhel" className={styles.contactBtn}>
          Contact Me
      </a>
      </div>


      <img
        src={getImageUrl("Roth/roth101.png")}
        alt="Roth image"
        className={styles.rothImg}
      />
      
    </section>
  );
};
