import style from './Button.module.css';
import Whatsapp from './Whatsapp';

const Button = ({ text, color, link }) => {
  return (
    <div className={style.btn}>
      <div className={style.container}>
        <a href={link} target="_blank">
          <Whatsapp color={color}></Whatsapp>
          {text}
        </a>
      </div>
    </div>
  );
};

export default Button;
