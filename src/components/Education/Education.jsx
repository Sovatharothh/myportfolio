import React, { useState } from 'react';
import styles from './Education.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import educationData from '../../data/education.json';
import { MapPin, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

export function Education() {
  const [activeId, setActiveId] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveId((prev) => (prev === educationData.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveId((prev) => (prev === 1 ? educationData.length : prev - 1));
  };

  const handleDotClick = (id) => {
    setDirection(id > activeId ? 1 : -1);
    setActiveId(id);
  };

  const activeEducation = educationData.find((edu) => edu.id === activeId);

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className={styles.highlight}>Education</span>
        </motion.h2>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.bar} />
            <div className={styles.content}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -50 }}
                  transition={{ duration: 0.3 }}
                  className={styles.body}
                >
                  {activeEducation && (
                    <>
                      <div className={styles.header}>
                        {activeEducation.imageSrc && (
                          <a href={activeEducation.link} target="_blank" rel="noopener noreferrer">
                            <img
                              src={activeEducation.imageSrc}
                              alt={`${activeEducation.school} logo`}
                              className={styles.logoImg}
                            />
                          </a>
                        )}
                        <div>
                          <h3 className={styles.school}>{activeEducation.school}</h3>
                          <p className={styles.degree}>{activeEducation.degree}</p>
                        </div>
                      </div>

                      <div className={styles.meta}>
                        <p>
                          <MapPin size={18} className={styles.icon} />
                          {activeEducation.location}
                        </p>
                        <p>
                          <CalendarDays size={18} className={styles.icon} />
                          {activeEducation.period}
                        </p>
                      </div>
                      <p className={styles.description}>{activeEducation.description}</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className={styles.controls}>
                <motion.button
                  onClick={handlePrev}
                  className={styles.navBtn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <div className={styles.dots}>
                  {educationData.map((edu) => (
                    <motion.button
                      key={edu.id}
                      onClick={() => handleDotClick(edu.id)}
                      className={`${styles.dot} ${activeId === edu.id ? styles.active : ''}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
                <motion.button
                  onClick={handleNext}
                  className={styles.navBtn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
