import { useEffect, useRef } from 'react';
import './burger.scss';

export default function Burger() {
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Закрыть меню после нажатия на кнопку
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuToggleRef.current?.checked && // Меню открыто
        menuRef.current && // Меню существует
        !menuRef.current.contains(event.target) // Клик вне меню
      ) {
        menuToggleRef.current.checked = false; // Закрыть меню
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="burger-menu" ref={menuRef}>
      <input id="menu-toggle" type="checkbox" ref={menuToggleRef} />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <ul className="menubox">
        <span className="menu-item"></span>
        <div className="block_menu">
          <button className="menu_button" onClick={() => scrollToSection('main')}>Головна</button>
          <button className="menu_button" onClick={() => scrollToSection('history')}>О нас</button>
          <button className="menu_button" onClick={() => scrollToSection('history')}>Послуги</button>
          <button className="menu_button" onClick={() => scrollToSection('main')}>Вакансії</button>
          <button className="menu_button" onClick={() => scrollToSection('history')}>Контакти</button>
          <button className="menu_button" onClick={() => scrollToSection('history')}>Відгуки</button>
        </div>
      </ul>
    </div>
  );
}
