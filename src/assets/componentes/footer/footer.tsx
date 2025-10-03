import styles from './style.module.css';
import UseIsMobile from "../../hooks/useIsMobile";

function footer(){
    const isMobile = UseIsMobile();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <img src="forinlogofooter.png" />
                    </div>
                    <div className={styles.redesHiddenMobile}> 
                        <img src="whatsappfooter.png" />
                        <img src="instagramfooter.png" />
                        <img src="linkedinfooter.png" />
                    </div>
                    
                </div>
                
            </div>
            <div className={styles.direitosReservados}>
                
                {isMobile ?
                <>
                    <div className={styles.redes}> 
                        <img src="whatsappfooter.png" />
                        <img src="instagramfooter.png" />
                        <img src="linkedinfooter.png" />
                    </div>
                </>
                : 
                <>
                    <p>
                        FORIN LOGÍSTICA E TRANSPORTES — Todos os direitos reservados ©2025
                    </p>
                </>
            }
            </div>
        </>
    )
}

export default footer;