import { useEffect, useState } from 'react';
import style from './Disponibility.module.css';

function Disponibility() {
  const [message, setMessage] = useState('');
  const date = new Date();

  useEffect(() => {
    const holiday = fetch(
      `https://date.nager.at/api/v3/publicholidays/2023/AR`
    );
    console.log(holiday);
    if (date.getDay() === 6 || date.getDay() === 0) {
      setMessage('Cerrado');
    } else {
      const hour = date.getHours();
      if (hour < 8 || hour === 12 || hour >= 18) {
        setMessage('Cerrado');
      } else {
        setMessage('Abierto!');
      }
    }
  }, []);

  return (
    <section id="horario">
      <div className={style.container}>
        <span className={style.title}>Horario de atención</span>
        <span className={style.subtitle}>
          Actualmente:{' '}
          {message === 'Abierto!' ? (
            <span className={style.verde}>Abierto!</span>
          ) : (
            <span className={style.rojo}>Cerrado</span>
          )}
        </span>
        <ul>
          <li>Lunes-Viernes: 8:00hs - 12:00hs / 13:00hs - 18:00hs </li>
          <li>Sabados y Domingos: Cerrados</li>
        </ul>
      </div>
    </section>
  );
}

export default Disponibility;
