import styles from './mainContato.module.css';
import useIsMobile from './assets/hooks/useIsMobile';

function Contato(){
  const isMobile = useIsMobile();
  return (
    <>
    {isMobile ?
        <>
            <img src="banner-contato-mobile.png" className={styles.banner} />
        </>
        : 
        <>
            <img src="banner-contato.png" className={styles.container} />
        </>
    } 
      <div className={styles.content}>  
        <h3>Contato</h3>
        <div className={styles.phones}>
          <div className={styles.itens}>
            <div className={styles.item}>
              <img src="icon-phone-blue.png" className={styles.icon} />
              <span>(11) 2248-7694</span>
            </div>
            <p>|</p>
            <div className={styles.item}>
              <img src="icon-phone-blue.png" className={styles.icon} />
              <span>(11) 96432-0483</span>
            </div>
            <p>|</p>
            <div className={styles.item}>
              <img src="email.png" className={styles.icon} />
              <span>sac@transforin.com.br</span>
            </div>
          </div>
          <hr className={styles.line} />  
        </div>
      </div>
      <div className={styles.containerForm}>
        <h4>Deixe uma mensagem e nossa equipe terá o prazer de retornar assim que possível</h4>
        <div className={styles.form}>
          <input type="text" placeholder="Nome" name="nome" />
          <input type="email" placeholder="E-mail" name="email" />
          <input type="text" placeholder="Assunto" name="assunto" />
          <textarea name="mensagem" placeholder="Digite aqui sua mensagem" cols={20} rows={10} minLength={10} maxLength={500} className={styles.textarea}></textarea>
          <div className={styles.containerBtn}>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contato