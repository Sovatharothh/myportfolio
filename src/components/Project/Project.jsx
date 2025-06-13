import React, { useState, useEffect } from "react";
import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleProjects = isMobile && !showAll ? projects.slice(0, 3) : projects;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {visibleProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {isMobile && projects.length > 3 && (
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.toggleBtn}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};
