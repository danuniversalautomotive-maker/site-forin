import style from './style.module.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className={style.container}>
                <a href="/portifolio">
                    Portfólio
                </a>
                <span>
                    |
                </span>
                <a href="">
                    Rastrear Carga
                </a>
                <span>
                    |
                </span>
                <a href="/orcamento">
                    Orçamento
                </a>
                <span>
                    |
                </span>
                <Link to="/contato">
                    Contato
                </Link>
            </div>
        </>
    )

}

export default Menu