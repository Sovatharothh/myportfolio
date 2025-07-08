import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemTop}>
                <a
                  href={historyItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={historyItem.imageSrc}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </a>
                <div className={styles.historyItemHeader}>
                  <h3>{historyItem.role}</h3>
                  <h4>{historyItem.organisation}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>
              </div>

              <div className={styles.historyItemDetails}>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: experience }}
                    />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
