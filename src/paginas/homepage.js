import '../App.css'

const Homepage = () => {
    return (
        <>
            <div className='homepage'>
                <img className="imgLogo" src={require(`../imagens/logo.png`)} height={707} width={707} alt='' />

                <div className='ret_homepage'>
                    <img src={require('../imagens/retangulo_homepage.png')} height={1600} alt='' />

                    <img className='n_edicao' src={require('../imagens/n_edicao/8_preto.png')} height={500} width={500} alt='' />

                    <div className='artistas_semanais'>
                        <div className='artista_semanal1'>
                            <div className='nome_artista_semanal'>
                                <img src={require('../imagens/retangulo_nomes.png')} height={70} width={300} alt='' />
                                <p>Lana del Rey</p>
                            </div>
                            <img src={require('../imagens/artistas/lana.png')} height={550} width={430} alt='' />
                            <p> Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. </p>
                        </div>

                        <div className='artista_semanal1'>
                            <div className='nome_artista_semanal'>
                                <img src={require('../imagens/retangulo_nomes.png')} height={70} width={300} alt='' />
                                <p>Lana del Rey</p>
                            </div>
                            <img src={require('../imagens/artistas/lana.png')} height={550} width={430} alt='' />
                            <p> Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. </p>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}

export default Homepage;