
import styles from'./advantages.module.scss';
import React from 'react';
import { Check } from 'lucide-react';




export default function Advantages  () {
const advantages = [
    {
      title: 'Перша перевага',
      description: 'Наш досвід і знання у сфері працевлаштування за кордоном роблять нас експертами в цій галузі.',
    },
    {
      title: 'Друга перевага',
      description: 'Ми ретельно обираємо своїх партнерів-роботодавців, щоб пропонувати нашим клієнтам лише найкращі вакансії та умови праці.',
    },
    {
      title: 'Третя перевага',
      description: 'З нами ви можете бути впевнені, що ваше працевлаштування буде проведене відповідно до законодавства та вимог країни призначення.',
    },
    {
      title: 'Четверта перевага',
      description: 'Ми пропонуємо персоналізований підхід та індивідуальний супровід на кожному етапі процесу працевлаштування.',
    },
    {
      title: 'Пята перевага',
      description: 'Співпрацюючи з нами, ви отримуєте повну допомогу у працевлаштуванні від А до Я під ключ. А також 100% гарантію на виконання обовязків з нашого боку та багато іншого.',
    },
    {
     title: 'Шоста перевага',
      description: 'Ми ретельно обираємо своїх партнерів-роботодавців, щоб пропонувати нашим клієнтам лише найкращі вакансії та умови праці.',
    },
  ];

  return (
    <section className={styles.advantages}>
         <div className={styles.block}>
        
       
      <h2 className={styles.title}>Переваги компанії</h2>
      <p className={styles.subtitle}>Ми відрізняємося від інших компаній своїми унікальними перевагами.</p>

      <div className={styles.list}>
        {advantages.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>
              <Check size={20} color="white" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
       </div>
    </section>
  );
}