
import styles from './team.module.scss';

export default function Team() {
  const teamMembers = [
    { name: 'Блинов Иван Валериевич', position: 'Старший менеджер', phone: '+34 609 104 695' },
    { name: 'Петрова Анна Сергеевна', position: 'Менеджер', phone: '+34 601 234 567' },
    { name: 'Сидоров Алексей Николаевич', position: 'Финансовый директор', phone: '+34 602 345 678' },
    { name: 'Иванова Мария Петровна', position: 'Юридический консультант', phone: '+34 603 456 789' },
    { name: 'Кузнецов Дмитрий Андреевич', position: 'Менеджер', phone: '+34 604 567 890' },
    { name: 'Смирнова Ольга Викторовна', position: 'Администратор', phone: '+34 605 678 901' },
    { name: 'Волков Сергей Павлович', position: 'Менеджер по трудоустройству', phone: '+34 606 789 012' },
    { name: 'Морозова Екатерина Игоревна', position: 'Специалист по клиентам', phone: '+34 607 890 123' },
  ];

  return (
    <div className={styles.teamWrapper}>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.subtitle}>Команда экспертов всегда на связи!</p>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.position}>{member.position}</p>
            <p className={styles.phone}>{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}