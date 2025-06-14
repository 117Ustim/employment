
import styles from './reviews.module.scss';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Елена Зайцева',
      role: 'Клиент нашей компании',
      text: 'Решила попробовать устроиться через Girona Recruitment SL, посоветовал мне их мой родственник и очень их восхвалял, теперь я понимаю почему. Помогли мне найти работу, с хорошими условиями и помогли с оформлением документов. Спасибо Вам большое!',
      image: '/rew_1.jpg',
    },
    {
      id: 2,
      name: 'Андрей Иванов',
      role: 'Клиент нашей компании',
      text: 'Сотрудничество с Girona Recruitment SL оказалось лучшим решением. Они нашли для меня работу за короткий срок и сопровождали на всех этапах. Очень благодарен!',
      image: '/rew_2.jpg',
    },
    {
      id: 3,
      name: 'Мария Петрова',
      role: 'Клиент нашей компании',
      text: 'Спасибо Girona Recruitment SL за профессионализм и поддержку. Мне помогли не только найти работу, но и разобраться со всеми необходимыми документами!',
      image: '/rew_3.jpg',
    },
    {
      id: 4,
      name: 'Игорь Смирнов',
      role: 'Клиент нашей компании',
      text: 'Очень доволен работой с Girona Recruitment SL. Все сделали быстро, честно и качественно. Поддерживали меня на каждом этапе и ответили на все вопросы. Рекомендую!',
      image: '/rew_4.jpg',
    },
  ];

  return (
    <div className={styles.reviewsSection}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/video_rew.mp4" type="video/mp4" />
      </video>
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
  );
}