
import styles from './footer.module.scss';
import { FaTelegramPlane, FaViber, FaWhatsapp, FaVk } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Если у вас остались вопросы, пожалуйста, свяжитесь с нами через любой удобный для вас мессенджер или напишите нам на почту: <a href="mailto:gironarecruitmentsl@outlook.com">gironarecruitmentsl@outlook.com</a>
      </p>
      <div className={styles.icons}>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="viber://chat" target="_blank" rel="noopener noreferrer">
          <FaViber />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
          <FaVk />
        </a>
      </div>
    </div>
  );
}