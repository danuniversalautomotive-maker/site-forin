import styles from './mainPortifolio.module.css';
import useIsMobile from './assets/hooks/useIsMobile';

function Portifolio(){
  const isMobile = useIsMobile();
  return (
    <>
    {isMobile ?
        <>
            <img src="banner-portifolio-mobile.png" className={styles.banner} />
        </>
        : 
        <>
            <img src="banner-portifolio.png" className={styles.banner} />
        </>
    }
    <div className={styles.container}>
      <h3>
        Portfólio
      </h3>
      <p>
      Executamos coletas e entregas porta a porta em todo o território nacional, com serviços customizados, criados para atender
      as diversas necessidades de nossos clientes, em qualquer modalidade, inclusive a logística reversa.
      </p>
      <div className={styles.containerImages}>
        <img src="caminhao-portfolio1.png" />
        <img src="caminhao-portfolio2.png" />
        <img src="caminhao-portfolio3.png" />
      </div>
    </div>
    </>
  )
}

export default Portifolio