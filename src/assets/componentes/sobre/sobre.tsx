import styles from './style.module.css'

function sobre(){
    return (
        <>
            <div className={styles.containerSobre}>
                <h3>Sobre a Forin</h3>
                <p>
                    Oferecemos soluções de transportes e logística com alto nível de serviço e superamos as expectativas de nossos clientes,
                    valorizando o trabalho de colaboradores e parceiros através de relações baseadas na cooperação.
                </p>
                <div className={styles.containerDesc}>
                    <img src="caminhao-portfolio3.png" className={styles.caminhao} />
                    <div>
                        <p>
                        Fundada em 03 de Maio de 2021 na cidade de Guarulhos– SP, a Forin Logística e Transportes Ltda tem buscado cada vez mais ser sinônimo de eficiência, satisfação e credibilidade junto aos seus clientes.
                        </p>
                        <br />
                        <p>
                            Além disso, desde a nossa fundação, o compromisso com o cliente tem sido um dos pilares que sustentam a relação de confiança que mantemos com cada um.
                        </p>
                        <br />
                        <p>
                            Buscamos sempre dar suporte às suas operações e garantir a entrega dos produtos embarcados com pontualidade, qualidade e segurança. 
                        </p>
                        <br />
                        <p>
                            Temos uma equipe sempre preparada para atender e solucionar as demandas do dia a dia.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default sobre