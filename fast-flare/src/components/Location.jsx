import style from './Location.module.css';

const Location = () => {
  return (
    <div className={style.container}>
      <span className={style.title}>Encuentranos en</span>
      <span className={style.subtitle}>
        Salta 99, X5800 Río Cuarto, Cordoba, Argentina
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8296216583817!2d-64.3430303!3d-33.1398404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1ffff53268bbd%3A0x8e6fd9b85b1bd31d!2sSalta%2099%2C%20X5808BHA%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1682687028002!5m2!1ses-419!2sar"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
