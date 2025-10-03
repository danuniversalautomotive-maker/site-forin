import style from './style.module.css'

function produtosServicos(){
    return (
        <>
            <div className={style.container}>
                <h3 className={style.title}>
                    Produtos e Serviços
                </h3>
                <div className={style.containerIcons}>
                    <div>
                        <img src="forin-package.png" />
                        <span>
                            Forin Package
                        </span>
                    </div>
                    <div>
                        <img src="forin-rodo.png" />
                        <span>
                            Forin Rodo
                        </span>
                    </div>
                    <div>
                        <img src="forin-cargo.png" />
                        <span>
                            Forin Cargo
                        </span>
                    </div>
                    <div>
                        <img src="forin-rodo-economico.png" />
                        <span>
                        Forin Rodo Econômico
                        </span>
                    </div>
                    <div>
                        <img src="forin-doc.png" />
                        <span>
                            Forin Doc
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default produtosServicos;