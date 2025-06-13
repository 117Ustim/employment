
import styles from'./history.module.scss';
import Image from 'next/image';
import {history_text} from '../../../data'


export default function History () {
return (
    <div className={styles.container}>
         <div className={styles.block}>
        
       
      <div className={styles.left}>
        <h2>{history_text[0].title}</h2>
        <p>
          {history_text[0].text_1}
        </p>
        <p>
         {history_text[0].text_2}
        </p>
        <p>
          {history_text[0].text_3}
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.imagesGrid}>
          <Image src="/1.jpg" alt="Фото 1" width={300} height={200} />
          <Image src="/2.jpg" alt="Фото 2" width={300} height={200} />
          <Image src="/3.jpg" alt="Фото 3" width={300} height={200} />
          <Image src="/4.jpg" alt="Фото 4" width={300} height={200} />
        </div>
      </div>
    </div>
       </div>
  );
}