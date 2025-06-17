
import Footer from '../footer/Footer';
import styles from './reviews.module.scss';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Елена Зайцева',
      role: 'Клиент нашей компании',
      text: 'Решила попробовать устроиться через CINTE IBERIA, посоветовал мне их мой родственник и очень их восхвалял, теперь я понимаю почему. Помогли мне найти работу, с хорошими условиями и помогли с оформлением документов. Спасибо Вам большое!',
      image: '/rew_1.jpg',
    },
    {
      id: 2,
      name: 'Андрей Иванов',
      role: 'Клиент нашей компании',
      text: 'Сотрудничество с CINTE IBERIA оказалось лучшим решением. Они нашли для меня работу за короткий срок и сопровождали на всех этапах. Очень благодарен!',
      image: '/rew_3.jpg',
    },
    {
      id: 3,
      name: 'Мария Петрова',
      role: 'Клиент нашей компании',
      text: 'Спасибо CINTE IBERIA за профессионализм и поддержку. Мне помогли не только найти работу, но и разобраться со всеми необходимыми документами!',
      image: '/rew_2.jpg',
    },
    {
      id: 4,
      name: 'Оксана Смирнова',
      role: 'Клиент нашей компании',
      text: 'Очень довольна работой с CINTE IBERIA. Все сделали быстро, честно и качественно. Поддерживали меня на каждом этапе и ответили на все вопросы. Рекомендую!',
      image: '/rew_4.jpg',
    },
  ];

  return (
  <div className={styles.container}>
    <div className={styles.reviewsSection}>
      <div
        className={styles.backgroundImage}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Что клиенты думают о нас</h1>
        <div className={styles.cards}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.header}>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
                <div>
                  <h3 className={styles.name}>{review.name}</h3>
                  <p className={styles.role}>{review.role}</p>
                </div>
              </div>
              <p className={styles.text}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}