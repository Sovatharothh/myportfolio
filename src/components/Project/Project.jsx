import React, { useState } from "react";
import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {visibleProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      {projects.length > 3 && (
        <div className={styles.buttonWrapper}>
          <button onClick={() => setShowAll(!showAll)} className={styles.toggleBtn}>
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </section>
  );
};
