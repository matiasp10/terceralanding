import Button from './Button';
import style from './Testimonials.module.css';

const Testimonials = (props) => {
  return (
    <div className={style.box}>
      <span className={style.bigTitle}>Que opinan nuestros clientes</span>
      <div className={style.testimonials}>
        <div className={style.container}>
          <span className={style.title}>Marcelo Ortiz</span>
          <div className={style.score}>
            <span className={style.number}>5</span>
            <svg
              width="46"
              height="46"
              fill="#fc7428"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z"></path>
            </svg>
          </div>
          <p className={style.description}>
            Excelente lugar, cómodo para estacionar, excelentes precios y muy
            buena calidad de sus productos, muy buena atención y ahora con su
            sección de pinturas tenés todo en el mismo lugar. Te asesoran en
            todo de una manera clara y sencilla y con la ayuda de la calidad de
            los productos te salen los proyectos como los soñaste.
          </p>
        </div>
        <div className={style.container}>
          <span className={style.title}>Angeles ayala</span>
          <div className={style.score}>
            <span className={style.number}>5</span>
            <svg
              width="46"
              height="46"
              fill="#fc7428"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z"></path>
            </svg>
          </div>
          <p className={style.description}>
            Muy buena atención y buenísima la calidad de madera para nuestros
            trabajos.
          </p>
        </div>
        <div className={style.container}>
          <span className={style.title}>Rocio Vazquez</span>
          <div className={style.score}>
            <span className={style.number}>5</span>
            <svg
              width="46"
              height="46"
              fill="#fc7428"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z"></path>
            </svg>
          </div>
          <p className={style.description}>
            Muy buena atención. Excelentes materiales y buen precio. Trabajan
            con materiales que no se consiguen en otras madereras.
          </p>
        </div>
      </div>
      <Button
        text={'Danos tu reseña'}
        color={'#0f0d0e'}
        link={
          'https://www.google.com/search?q=Palandri+Maderas&rlz=1C1GCEA_enAR746AR746#lrd=0x95d1ffff52dc2731:0xaa04d3c36f634102,3,,,,'
        }
      />
    </div>
  );
};

export default Testimonials;
