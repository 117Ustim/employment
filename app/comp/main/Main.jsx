"use client";

import { motion } from "framer-motion";
import styles from './main.module.scss';
import { main_text } from "../../../data";

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {main_text[0].title}
        </motion.h1>

        <motion.p
          className={styles.text}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {main_text[0].text}
        </motion.p>
<a 
  href="https://t.me/+Ecw2cS1TW1Q4NjM1" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <motion.button
          className={styles.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Связаться с нами
        </motion.button>
       </a> 
      </motion.div>
    </div>
  );
}