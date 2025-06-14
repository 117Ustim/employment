"use client";

import Burger from "../burger/Burger";
import styles from "./menu.module.scss";

export default function Menu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <nav className={styles.menu}>
      <div className={styles.left}>
        <button  className={styles.menuButton}onClick={() => scrollToSection("main")}>Главная</button>
        <button  className={styles.menuButton}onClick={() => scrollToSection("history")}>О нас</button>
         <button  className={styles.menuButton}onClick={() => scrollToSection("history")}>Услуги</button>
      </div>

      <div className={styles.logo}>
         <div className={styles.logo_block}>
       <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      <img src="/logo_text.png" alt="LogoText" className={styles.logoText} /> 
        </div>
    
      </div>

      <div className={styles.right}>
        <button className={styles.menuButton}onClick={() => scrollToSection("header")}>Вакансии</button>
         <button className={styles.menuButton}onClick={() => scrollToSection("header")}>Контакты</button>
        <button className={styles.menuButton}onClick={() => scrollToSection("footer")}>Отзывы</button>
      </div>
    </nav>
    <div className={styles.menu_1000}>
            <Burger/>
          </div>
          </>
  );
}