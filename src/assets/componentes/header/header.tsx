import styles from './style.module.css';
import Menu from '../menu/menu'
import useIsMobile from "../../hooks/useIsMobile";
import MenuMobile from '../../componentes/menu/menuMobile';
import { Link } from 'react-router-dom';

function Header(){
    const isMobile = useIsMobile();

    return (
        <>
            <div>
                {isMobile ?
                <>
                    <MenuMobile />
                </>
                : 
                <>
                    <div className={styles.container}>
                        <Link to="/">
                            <img src="logo.png" className={styles.logo} />
                        </Link>
                    </div>
                    <Menu />
                </>
                }
            </div>
        </>
    )
}

export default Header;