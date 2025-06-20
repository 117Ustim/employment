"use client";

import styles from "./page.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import Main from "../app/comp/main/Main";
import Advantages from "./comp/advantages/Advantages";
import History from "../app/comp/history/History";
import Services from "../app/comp/services/Services";
import Menu from "../app/comp/main/menu/Menu";
import Doc from "./comp/doc/Doc";
import Vacancies from "./comp/vacancies/Vacancies";
import Team from "./comp/team/Team";
import Reviews from "./comp/reviews/Reviews";

export default function Home() {
  const sections = [
    { id: "main", component: <Main /> },
    { id: "history", component: <History /> },
    { id: "doc", component: <Doc /> },
    { id: "advantages", component: <Advantages /> },
    { id: "services", component: <Services /> },
    { id: "vacancies", component: <Vacancies /> },
    { id: "team", component: <Team /> },
    { id: "reviews", component: <Reviews /> },
   
  ];

  return (
    <>
      <motion.div
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Menu />
        <div className={styles.wrapper}>
          {sections.map(({ id, component }) => (
            <motion.section
              key={id}
              id={id}
              className={styles.section}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {component}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </>
  );
}
