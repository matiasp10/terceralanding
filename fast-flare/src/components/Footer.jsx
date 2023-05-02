import style from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={style.container}>
      <span className={style.logo}>Palandri Maderas</span>
      <div className={style.telefono}>
        <span className={style.title}>Telefono</span>
        <span>(358) 4292052</span>
        <span>(358) 4629952</span>
      </div>
      <div className={style.direccion}>
        <span className={style.title}>Dirección</span>
        <span>Salta 99, Rio Cuarto, Cordoba, Argentina</span>
      </div>
    </div>
  );
};

export default Footer;
