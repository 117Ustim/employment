
import styles from './team.module.scss';
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Матвеева Элина',
      position: 'Директор компании, руководитель иммиграционного отдела',
      education: 'Высшее образование Tallinn University of Technology (TalTech)',
      experience: 'Опыт работы в компании 7 лет',
      image: '/1/team_1_1.png',
    },
    {
      name: 'Баринов Владислав Андреевич',
      position: 'Старший менеджер компании',
      education: 'Hochschule Esslingen (Deutschland) — Социальная работа, миграция и интеграция',
      experience: 'Опыт работы в компании 4 года',
      image: '/1/team_2_2.png',
    },
    {
      name: 'Соколов Дмитрий Романович',
      position: 'Менеджер по работе с клиентами',
      education: 'Политология и социология — Universidad Nacional de Educación a Distancia (Испания)',
      experience: 'Опыт работы в компании 7 лет',
      image: '/1/team_3.jpg',
    },
    {
      name: 'Шепелева Мария Александровна',
      position: 'Менеджер по работе с клиентами, Onboarding Specialist (Адаптация после приёма на работу)',
      education: 'Санкт-Петербургский политехнический университет Петра Великого (СПбПУ)',
      experience: 'Опыт работы в компании 4 года',
      image: '/1/team_4.jpg',
    },
    {
      name: 'Новиков Андрей Романович',
      position: 'Менеджер по работе с клиентами, Юрист по трудовому праву (Employment Lawyer)',
      education: 'Белорусский государственный экономический университет — Международное право',
      experience: 'Опыт работы в компании 3 года',
      image: '/1/team_5.jpg',
    },
    {
      name: 'Маёров Кирилл Сергеевич',
      position: 'Старший менеджер по работе с клиентами',
      education: 'Магистр международных отношений — Белорусский Государственный Университет',
      experience: 'Опыт работы в компании 6 лет',
      image: '/1/team_6.jpg',
    },
    {
      name: 'Меркушев Марк Олегович',
      position: 'Менеджер по работе с клиентами, финансовый консультант',
      education: 'Вильнюсский университет (VU), 2005-2009 — Факультет туризма и спорта',
      experience: 'Опыт работы в компании 3 года',
      image: '/1/team_7.jpg',
    },
    {
      name: 'Васнецова Оксана Николаевна',
      position: 'Управляющая компанией, руководитель финансового отдела',
      education: 'Высшее образование, магистр SAIS Europe (Johns Hopkins University, Болонья) ',
      experience: 'Опыт работы в компании 7 лет',
      image: '/1/team_1.jpg',
    },
  ];

  return (
    <div className={styles.teamWrapper}>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.subtitle}>Команда экспертов всегда на связи!</p>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={member.image} alt={member.name} width={100} height={100} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{member.name}</h2>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.education}>{member.education}</p>
              <p className={styles.experience}>{member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}