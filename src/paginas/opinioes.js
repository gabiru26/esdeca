import { Link } from "react-router-dom";
import '../App.css'

const Opinioes = () => {
    return (
        <>

            <Link to='/' className="logo_inv"><img className="imgLogo" src={require(`../imagens/logo.png`)} height={707} width={707} alt='' /></Link>

            <img className="tit_opinioes" src={require(`../imagens/titulos/opinioes.png`)} height={600} width={600} alt='' />

            <div className="but_opinioes">
                <div>
                    <Link className="but_enterro" to="/paginas/opiniao/enterro">
                        <img src={require('../imagens/retangulo_nomes.png')} height={70} width={300} alt='' />
                        <p>Crónicas do Enterro</p>
                    </Link>
                </div>

                <div>
                    <Link className="but_enterro" to="/paginas/opiniao/enterro">
                        <img src={require('../imagens/retangulo_nomes.png')} height={70} width={300} alt='' />
                        <p>Animação</p>
                    </Link>
                </div>
            </div>

            <div className="ret_opinioes">
                <img className="ret_lar_opinioes" src={require('../imagens/retangulo_opinioes.png')} width={1440} alt='' />

                <div className="nome_opiniao">
                    <img src={require('../imagens/retangulo_nomes.png')} height={70} width={300} alt='' />
                    <p>Made in DeCA</p>
                </div>

                <p className="desc_opinioes"> "Na passada noite de 13 de maio decorreu a vigésima edição do Made in Deca, o festival anual de curtas-mertragens do Departamento de Comunicação e Arte da Universidade de Aveiro. E mais uma vez, o Deca revelou os seus novos talentos e trouxe-nos magnificas novas produções audiovisuais que continuam a elevar a fasquia e a qualidade presente no festival. Todos os anos sentimos um grande prazer em ver as obras realizadas pelos alunos do Deca, mas a verdade é que este ano o evento revelou-se verdadeiramente especial. Tendo em conta a suprema autoridade que somos na indústria audiovisual, decidimos então aceitar a proposta das És DeCÁers e escrever um pequeno resumo da noite, com alguns comentários sobre cada curta e dizer aquilo que achamos do evento em geral, aqui vai:"
                </p>

                <Link to="/paginas/opiniao/mid">Ver Mais</Link>
            </div>




        </>
    );
}

export default Opinioes;