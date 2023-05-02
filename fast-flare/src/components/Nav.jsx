import style from './Nav.module.css';

function Nav() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <a href="#">
          <span>PALANDRI MADERAS</span>
        </a>
      </div>
      <div className={style.menu}>
        <ul>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#horario">Horarios</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
