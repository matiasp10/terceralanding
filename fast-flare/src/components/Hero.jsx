import Button from './Button';
import style from './hero.module.css';
import Facebook from './Facebook';
import Instagram from './Instagram';

function Hero() {
  return (
    <section className={style.heroSection}>
      <header>
        <h1 className={style.title}>Palandri Maderas</h1>
        <h2 className={style.subtitle}>Rio Cuarto, Cordoba</h2>
        <h3 className={style.description}>
          Preparamos el material para su Techo de Madera, se pinta tiranteria y
          machimbre, también ofrecemos molduras, zocalos, cenefas, aislantes
          para su techo, tejas metálicas y de plástico, pisos de maderas.
        </h3>
        <div className={style.social} id="contacto">
          <a href="https://www.facebook.com/palandrimaderasriocuarto">
            <Facebook></Facebook>
          </a>
          <a href="https://www.instagram.com/palandrimaderas">
            <Instagram></Instagram>
          </a>
        </div>
        <Button text={'Pide tu presupuesto!'} color={'#0f0d0e'} />
      </header>
      <aside>
        <img
          className={style.image}
          src="https://images.pexels.com/photos/5974396/pexels-photo-5974396.jpeg"
          alt=""
        />
      </aside>
    </section>
  );
}

export default Hero;
