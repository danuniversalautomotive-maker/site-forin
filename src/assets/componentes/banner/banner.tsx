import style from './style.module.css';
import useIsMobile from "../../hooks/useIsMobile";

function Banner(){
    const isMobile = useIsMobile();

    return (
        <>
            
            {isMobile ?
                <>
                    <img src="banner-mobile.png" className={style.banner} />        
                </>
                : 
                <>
                    <img src="banner.png" className={style.banner} />
                </>
            }
        </>
    )
}

export default Banner;