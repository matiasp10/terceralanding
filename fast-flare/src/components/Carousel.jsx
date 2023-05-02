import style from './Carousel.module.css';

const Carousel = (props) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src="1.jpeg" alt="Palandri Maderas imagen 1" />
      </div>
      <div className={style.imgContainer}>
        <img src="2.JPG" alt="Palandri Maderas imagen 2" />
      </div>
      <div className={style.imgContainer}>
        <img src="3.jpg" alt="Palandri Maderas imagen 3" />
      </div>
    </div>
  );
};

export default Carousel;
