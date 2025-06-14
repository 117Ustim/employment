import Image from 'next/image';
import styles from'./services.module.scss'


export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Наши услуги</h1>

      <div className={styles.servicesGrid}>
        {/* Первый блок услуги */}
        <div className={styles.serviceItem}>
          <Image src="/s_1.png" alt="Подбор персонала" width={80} height={80} />
          <div className={styles.textContainer}>  
          <h2 className={styles.itemTitle}>Подбор персонала</h2>
          <p className={styles.itemText}>
            Комплексное решение для вашего бизнеса. Наши менеджеры сделают всю работу за вас.
          </p>
        </div>
</div>
        {/* Второй блок услуги */}
        <div className={styles.serviceItem}>
          <Image src="/s_2.png" alt="Поиск работы" width={80} height={80} />
          <div className={styles.textContainer}>  
          <h2 className={styles.itemTitle}>Поиск работы</h2>
          <p className={styles.itemText}>
            Если вы в поиске работы, мы предоставим вам множество вариантов по всей Европе и не только. Только проверенные работодатели и лучшие условия труда.
          </p>
        </div>
</div>
        {/* Третий блок услуги */}
        <div className={styles.serviceItem}>
          <Image src="/s_3.png" alt="Подготовка документов" width={80} height={80} />
          <div className={styles.textContainer}>  
          <h2 className={styles.itemTitle}>Подготовка документов</h2>
          <p className={styles.itemText}>
            Экспертная помощь в управлении персоналом. Оптимизация кадровых процессов.
          </p>
        </div>
</div>
        {/* Четвертый блок услуги */}
        <div className={styles.serviceItem}>
          <Image src="/s_4.png" alt="Легализация в странах" width={80} height={80} />
          <div className={styles.textContainer}>  
          <h2 className={styles.itemTitle}>Легализация в странах</h2>
          <p className={styles.itemText}>
            Всесторонняя оценка вашей HR-системы. Выявление слабых мест и точек роста.
          </p>
        </div>
        </div>

        {/* Пятый блок услуги */}
       <div className={styles.serviceItem}>
  <Image src="/s_5.png" alt="Организация переезда" width={80} height={80} />
  <div className={styles.textContainer}> 
    <h2 className={styles.itemTitle}>Организация переезда</h2>
    <p className={styles.itemText}>
      Вывод персонала за штат вашей компании. Снижение рисков и затрат.
    </p>
  </div>
</div>

        {/* Шестой блок услуги */}
        <div className={styles.serviceItem}>
          <Image src="/s_6.png" alt="Получение ВНЖ" width={80} height={80} />
         <div className={styles.textContainer}>  
          <h2 className={styles.itemTitle}>Получение ВНЖ</h2>
          <p className={styles.itemText}>
            Полный цикл расчета и начисления заработной платы. Гарантия точности и своевременности.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}