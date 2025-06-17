
import styles from './advantages.module.scss';
import React from 'react';
import { Check } from 'lucide-react';




export default function Advantages() {
  const advantages = [
    {
      title: 'Первое преимущество',
      description: 'Наш опыт и знания в области трудоустройства за границей делают нас экспертами в этой области',
    },
    {
      title: 'Второе преимущество',
      description: 'Мы тщательно выбираем своих партнеров-работодателей, чтобы предложить нашим клиентам только лучшие вакансии и рабочие условия.',
    },
    {
      title: 'Третье преимущество',
      description: 'С нами вы можете быть уверены, что ваше трудоустройство будет проведено в соответствии с законодательством и требованиями страны назначения.',
    },
    {
      title: 'Четвертое преимущество',
      description: 'Мы предлагаем персонализированный подход и индивидуальное сопровождение на каждом этапе процесса трудоустройства.',
    },
    {
      title: 'Пятое преимущество',
      description: 'Сотрудничая с нами вы получаете полную помощь в трудоустройстве от А до Я под ключ. 100% гарантию на выполнение обязанностей с нашей стороны и много другого.',
    },
    {
      title: 'Шестое преимущество',
      description: 'Мы поддерживаем наших клиентов не только на этапе трудоустройства, но и после начала работы за границей, помогая решать возникающие вопросы и адаптироваться на новом месте.',
    },
  ];

  return (
    <section className={styles.advantages}>
      <div className={styles.block}>


        <h2 className={styles.title}>Преимущества компании</h2>
        <p className={styles.subtitle}>Мы отличаемся от других компаний своими уникальными преимуществами.</p>

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