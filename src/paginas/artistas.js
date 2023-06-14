import { Link } from "react-router-dom";
import '../App.css'

const Artistas = () => {
    return (
        <>
            <div className="header">
                <Link to='/' className="logo_inv"><img className="imgLogo" src={require(`../imagens/logo.png`)} height={707} width={707} alt='' /></Link>
                <img className="tit_opinioes" src={require(`../imagens/titulos/artistas.png`)} height={600} width={600} alt='' />
            </div>

            <div className="container">
                <div className="edicao12">
                    <div>
                        <img src={require(`../imagens/edicao_quad/n2.png`)} width={1200} alt='' />
                        <img className="n_edicao_art" src={require(`../imagens/n_edicao/12_preto.png`)} height={300} width={300} alt='' />
                        
                        <div className="container1">
                            <div className="column">

                                <div className='nome_artista1'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row1">
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoaoalolaolaola
                                        oaoalolaolaolaoaoalolaolaolaoaoalolaolaolaoaoa
                                    </p>
                                </div>

                            </div>
                            <div className="edicao8_dir">

                                <div className='nome_artista2'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row2">
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoaoalolaolaola
                                        oaoalolaolaolaoaoalolaolaolaoaoalolaolaolaoaoa
                                    </p>
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edicao11">
                    <div>
                        <img src={require(`../imagens/edicao_quad/n1.png`)} width={1200} alt='' />
                        <img className="n_edicao_art2" src={require(`../imagens/n_edicao/11_preto.png`)} height={300} width={300} alt='' />
                        
                        <div className="container1">

                            <div className="column">

                                <div className='nome_artista3'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row3">
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoaoalol
                                        oaoalolaolaolaoaoalolaolaolaoaoalolaolaola
                                    </p>
                                </div>

                            </div>

                            <div className="edicao8_dir">

                                <div className='nome_artista2'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row2">
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoaoalo
                                        oaoalolaolaolaoaoalolaolaolaoaoalolaolao
                                    </p>
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


            <div className="edicao10">
                    <div>
                        <img src={require(`../imagens/edicao_quad/n2.png`)} width={1200} alt='' />
                        <img className="n_edicao_art" src={require(`../imagens/n_edicao/12_preto.png`)} height={300} width={300} alt='' />
                        
                        <div className="container1">
                            <div className="column">

                                <div className='nome_artista1'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row1">
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoa
                                        oaoalolaolaolaoaoalolaolaolaoaoalolao
                                    </p>
                                </div>

                            </div>
                            <div className="edicao8_dir">

                                <div className='nome_artista2'>
                                    <img src={require('../imagens/retangulo_nomes.png')} height={60} width={200} alt='' />
                                    <p>Lana del Rey</p>
                                </div>

                                <div className="row2">
                                    <p >Olá sou a Lana, tenho 20 anos, estou no último ano de Design na UA e sou ilustradora. olaolaolaoaoalolaolaolaoaoalo
                                        laolaolaoaoalolaolaolaoaoalolaolaolaoaoalolaolaola
                                        oaoalolaolaolaoaoalolaolaolaoaoalolaolaolaoaoa
                                    </p>
                                    <img src={require('../imagens/artistas/lana.png')} height={250} width={230} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
               
            
        </>
    );
}

export default Artistas;