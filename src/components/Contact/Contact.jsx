import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.Contacttitle}>
        <h2>Contact Me:</h2>
      </div>
      <div className={styles.contactContent}>
      <p>Feel free to reach out for any inquiries or collaborations!</p>

      </div>

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

        <div className={styles.footerInfo}>
          <p >copyright &copy;2025, designed by ROTH TT</p>
        </div>
    </footer>
  );
};