
"use client";

import Swiper from "../swiper/Swiper";
import styles from "./vacancies.module.scss";


export default function Vacancies() {
  return (
    <section className={styles.vacancies}>
      <h1 className={styles.title}>Наши вакансии</h1>
      <p className={styles.description}>
        Мы предоставляем широкий выбор вакансий в разных уголках мира, предлагая уникальные и выгодные возможности для трудоустройства за границей. <br />
        У нас доступно более 1000 актуальных вакансий. <br />
        Для уточнения большего выбора связывайтесь с нами. <br />
        Мы готовы помочь вам найти работу вашей мечты. <br />
        Ваш успех — наша цель.
      </p>

 
      <div className={styles.carousel}>
       <Swiper/>
      </div>
    </section>
  );
}