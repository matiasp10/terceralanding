import style from './WhatsappChat.module.css';
import Whatsapp from './Whatsapp';

const WhatsappChat = (props) => {
  return (
    <a
      className={style.container}
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/5493584168036"
    >
      <Whatsapp color="#fff" />
    </a>
  );
};

export default WhatsappChat;
