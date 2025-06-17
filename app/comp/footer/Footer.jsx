
import styles from './footer.module.scss';
import { FaTelegramPlane, FaViber, FaWhatsapp, FaVk } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Если у вас остались вопросы, пожалуйста, свяжитесь с нами через любой удобный для вас мессенджер или напишите нам на почту: <a href="mailto:info.barkingjobs@gmail.com">info.barkingjobs@gmail.com</a>
      </p>
      <div className={styles.icons}>
        <a href="https://t.me/+Ecw2cS1TW1Q4NjM1" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaViber />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaVk />
        </a>
      </div>
    </div>
  );
}