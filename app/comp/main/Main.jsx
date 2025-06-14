"use client";

import { motion } from "framer-motion";
import styles from './main.module.scss';
import {main_text } from "../../../data";

export default function Main() {
  return (
    <div className={styles.container}>
   
      <video
        className={styles.video}
        src="/video_main_1.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Затемнение */}
      <div className={styles.overlay}></div>

     
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>
          {main_text[0].title}
        </h1>
        <p className={styles.text}>
          {main_text[0].text}
        </p>
        <button className={styles.button}>Связаться с нами</button>
      </motion.div>
    </div>
  );
}