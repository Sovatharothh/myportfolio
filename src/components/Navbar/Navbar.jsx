import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const handleMenuClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Sovatharoth HEL
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/closeIcon.png"
              : "https://deizhycgdcbjnpwmrxnp.supabase.co/storage/v1/object/public/portfolio-assets/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? styles.active : ""}
              onClick={() => handleMenuClick("#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeLink === "#education" ? styles.active : ""}
              onClick={() => handleMenuClick("#education")}
            >
              Education
            </a>
          </li>          


          <li>
            <a
              href="#experience"
              className={activeLink === "#experience" ? styles.active : ""}
              onClick={() => handleMenuClick("#experience")}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "#projects" ? styles.active : ""}
              onClick={() => handleMenuClick("#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#exchange-program"
              className={activeLink === "#exchange-program" ? styles.active : ""}
              onClick={() => handleMenuClick("#exchange-program")}
            >
              Exchange Programs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? styles.active : ""}
              onClick={() => handleMenuClick("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};