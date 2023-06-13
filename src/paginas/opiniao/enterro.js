import './opiniao.css'

const Enterro = () => {
    return (
        <>
            <p className="titulo_cronicas">Crónicas do Enterro</p>

            <div className="tit_opiniao">
                <h1>
                    Realizado por Leonardo Duarte Catalano
                </h1>
                <h3>
                    Um estudante com saudades da licenciatura
                </h3>
                <h3>
                    1º ano | Mestrado em Desenvolvimento de Jogos Digitais
                </h3>
            </div>

            <div className="texto_opiniao">
                <p>
                    Na sequência de mais um magnífico enterro de aveiro (talvez o meu último), e de uma grande depressão pós festa que provavelmente aconteceu a todos os estudantes, decidi fazer uma homenagem a este festival da melhor maneira possível.
                </p>
                <p>
                    Sendo que eu e os meus amigos costumamos vaguear pelo recinto e investigar a maior parte das barracas (para nos rirmos delas), pensei que fosse engraçado avaliá-las. Mas na verdade, como elas são todas  bastante obscenas, o único motivo pelo qual eu me sinto capaz de as classificar é por essa mesma obscenidade, ou como eu gosto de lhe chamar, “bartolice”/”javardice”.
                </p>
                <p>
                    Embora eu e os meus colegas tenhamos achado que todas elas fossem engraçadas pela sua falta de filtro e da boa dose de objetos fálicos espalhados por todo o lado, tenho noção que esta classificação poderá eventualmente afetar vários integrantes de Núcleos, Tunas, Cursos ou outras associações duvidosas, mas honestamente ……. não quero saber.
                </p>
                <p>
                    Depois da maior caminhada da minha vida (tirar foto às 29 barracas espalhadas pelo recinto), sentei-me e comecei a construir o ranking que me pareceu mais adequado, considerando o nível de pouca vergonha, “tasqueirice”, e captura do espírito português mais rasca possível. Segue-se o mesmo:
                </p>

                <div className="containers_opiniao">
                    <div className='container_enterro'>
                        <h3>
                            29. Deboche
                        </h3>
                        <p>
                            Sendo que esta avaliação séria e pensada foi feita tendo em conta o nível de degredo a que os estudantes podem chegar no design das suas barracas, pensei que esta fosse a mais fraca de todas. Não tem muito por onde se lhe pegar, e a mim parece-me que fizeram um brainstorm 1 minuto antes da decisão final do tema da barraca. Não é muito rasca, mas também não me apela muito. Estranha. No entanto, têm um bom shot.
                        </p>
                        <img src={require('../../imagens/enterro/image1.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            28. Cabana
                        </h3>
                        <p>
                            Penso que seja a barraca dos alunos de biologia. Muita alusão a estupefacientes, não tem muita piada e não se destaca muito no meio das outras, desculpem amigos de biologia. Embora seja relativamente bonita, não lhe consigo chamar de rasca ou cabana da tasca, portanto não lhe posso dar muito crédito.
                        </p>
                        <img src={require('../../imagens/enterro/image2.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            27. ???
                        </h3>
                        <p>
                            Não sei se foi de estar constantemente entorpecido durante todas as noites de enterro, mas não me recordo nem sequer remotamente de pôr os olhos nesta barraca. Não tem toldo, o nome não se vê, e não se entende bem à primeira vista do que se trata. Parece-me uma barraca de mecânica, o que já só por si é bastante tasqueiro, principalmente com toda a alusão a motas, carros e pistões. Faz-me lembrar o típico amigo dos subúrbios que vai a corridas ilegais de carros velhos aos domingos à noite. Não a posso classificar muito mais alto, infelizmente.
                        </p>
                        <img src={require('../../imagens/enterro/image3.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            26. Tua Taskobar
                        </h3>
                        <p>
                            Pelos vistos esta é a barraca da FITUA. Só obtive esta informação após ser apedrejado digitalmente por ter dito que a autoria era do curso de música. Estou farto de ter de ouvir alunos de música às 8:30 a cantar no departamento, e vamos ser sinceros, provavelmente muitos deles fazem parte da FITUA. Fora isso, não achei de todo a cabana rasca ou tasqueira. Talvez o nome seja um pouquinho. Mas de resto…… nada me atrai.
                        </p>
                        <img src={require('../../imagens/enterro/image4.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            25. Smash Down
                        </h3>
                        <p>
                            De início não entendia o conceito de todo. Poderia ser bem mais “deslimado” nas arestas de maneira a parecer mais feio e obsceno. No entanto, o Toy que espreita no canto superior esquerdo da barraca transmite-me felicidade e alegria. De resto, nada de especial.
                        </p>
                        <img src={require('../../imagens/enterro/image5.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            24. Starbubas
                        </h3>
                        <p>
                            Penso que a barraca, embora seja bastante classy, tem um nome que me dá um certo nojo, e que me faz dar-lhes pontos por isso. Está demasiado bem construída e polida, portanto claramente não a posso colocar muito acima na lista, mas dou os meus parabéns aos estudantes que a construíram, provavelmente embriagados ou de ressaca com 2 horas de sono.
                        </p>
                        <img src={require('../../imagens/enterro/image6.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            23. Tinder Surpresa
                        </h3>
                        <p>
                            Entendi o esforço e a alusão ao tinder. Tinha joguinhos engraçados e um cartaz bonitinho, mas isso não me transmitiu muito a escassez de uma típica barraca de bebida. No entanto, o ovo de alumínio que colocaram em cima era feito à trolha, embora provavelmente com o suor e lágrimas de todos vós. Dá-vos pontos por ser tão feio aos olhos. Infelizmente, só o utilizava como ponto de referência para o posto de carregamento mais próximo.
                        </p>
                        <img src={require('../../imagens/enterro/image7.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            22. A seita que dói menos
                        </h3>
                        <p>
                            Sendo bastante honesto, não me lembro de tirar fotografias a esta barraca, e provavelmente esqueci-me que esta se encontrava na minha galeria. O nome é uma piada … sem piada, e o interior da barraca é demasiado chique para lhe dar um ranking mais alto. Têm uma figura do Cristiano Ronaldo bastante assustador de lado e sinceramente é apenas isso que os coloca tão alto na classificação. Moderadamente tasqueiro.
                        </p>
                        <img src={require('../../imagens/enterro/image8.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            21. Chiba-te
                        </h3>
                        <p>
                            Não entendia o conceito da barraca de início. Mas ao entender fiquei um pouco desiludido porque a meu ver não tem piada absolutamente nenhuma fazer uma barraca sobre fofocas e malandrices do género. Preciso de sentir que a barraca me faça sentir dentro de uma tasca de aldeia rodeada de senhores idosos a conversar sobre futebol, e no caso senti apenas que estava num ambiente em que menores tentam pedir bebida aos baristas em troca de rebuçados, e isso dá-lhes alguns pontos pela diversidade.
                        </p>
                        <img src={require('../../imagens/enterro/image9.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            20. Toysinus
                        </h3>
                        <p>
                            Quando entendi o trocadilho por detrás do nome desta barraca fiquei assustado. Acho muito estranho fazerem piadas sexuais com uma loja de brinquedos para crianças mas infelizmente para a humanidade o humor é relativo a cada um de nós. Eu entendo que seja uma barraca de engenheiros, que provavelmente tem falta de contacto feminino (desculpem), mas por favor… tomem banho, lavem a loiça e tirem a roupa do estendal, vão ver que a vossa vida melhora. Bastante ridícula, portanto fica no top 20.
                        </p>
                        <img src={require('../../imagens/enterro/image10.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            19. Posso pap art
                        </h3>
                        <p>
                            Entendo o esforço e a criatividade do nome, mas sinceramente não achei muita piada, embora seja bastante rasca. No entanto, fica nesta posição puramente por ter uma zona onde as pessoas se podem despir e mostrar partes íntimas do seu corpo em troca de bebida. Acho um pouco assustador, mas ao mesmo tempo muito rasca da parte do grupo estudantil. Parabéns, lugar 19.
                        </p>
                        <img src={require('../../imagens/enterro/image11.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            18. Post tits
                        </h3>
                        <p>
                            Esta é a barraca do meu curso, portanto gosto de lhe mostrar muito amor e carinho. Deixei aqui bastante do capital presente na minha conta bancária. Embora seja apelativa visualmente, não a achei demasiado estrondosa, ou pelo menos não tanto como as que vêm aí. Porém, merece estar nesta posição pelos seios gigantes pendurados em cada uma das pontas. É impossível não olhar. Também ofereciam post-its em que podíamos desenhar os seios que nos apetecesse, portanto merecem um bónus de javardice nesse aspeto.
                        </p>
                        <img src={require('../../imagens/enterro/image12.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            17. Super Mario Hoes
                        </h3>
                        <p>
                            Quando a vi pela primeira vez fiquei feliz por terem escolhido um tema com um dos jogos favoritos da minha infância, mas quando li o nome e nas ilustrações dos shots disponíveis fiquei completamente traumatizado. É muito nojento, e acho que representa muito bem o que é ser engenheiro informático. Bastante trolha.
                        </p>
                        <img src={require('../../imagens/enterro/image13.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            16. Barraca Abans
                        </h3>
                        <p>
                            Isto sim é uma ótima representação de Portugal e de uma boa tasca portuguesa. Sinto que se um homem de bigode estivesse por detrás do balcão poderia comer uma bifana de porco e um fino a um euro e meio. Provavelmente a barraca mais “tasqueira” de todas. Infelizmente, o que me faz colocá-la tão baixo na lista é meramente o facto de não apresentar muito esforço e desempenho no seu desenvolvimento. Acho que falta um pingo de imaginação estudantil, mas a ideia estava bem encaminhada.
                        </p>
                        <img src={require('../../imagens/enterro/image14.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            15. Fifty shades of desire
                        </h3>
                        <p>
                            Sinceramente achei esta barraca muito nojenta. Sentia que quando me chegava perto as hormonas dos jovens bêbados começavam a espalhar-se cada vez mais, puramente pelo tema e design da barraca. Pontos de obscenidade por isso.
                        </p>
                        <img src={require('../../imagens/enterro/image15.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            14. Chupa Misto
                        </h3>
                        <p>
                            Foi eleita a melhor barraca do enterro do ano passado, mas, honestamente, não entendo o porquê. O nome não é assim muito criativo, embora seja bastante trolha (com todo o respeito aos construtores civis). Este ano parecia demasiado elegante e desenvolvida, o que não me permite colocá-la mais alto na tabela. No entanto era grande e descapotável - tal como os bares de praia no verão, o que para mim representa bem o espírito bartolo interior de um típico português (não sei porquê).
                        </p>
                        <img src={require('../../imagens/enterro/image16.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            13. Gestão na paudaria
                        </h3>
                        <p>
                            Não sei nem nunca saberei descrever o que sinto por esta barraca. Entendo o que quiseram transmitir, mas deixaram-me sem palavras. Gestão na pau-daria é um trocadilho extremamente low effort, mas eu sinto que esses são os que me fazem rir mais por serem tão mal concebidos. Sem palavras. Definitivamente trolha.
                        </p>
                        <img src={require('../../imagens/enterro/image17.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            12. Museu do lube
                        </h3>
                        <p>
                            Esta barraca faz-me sentir um pouco de nojo por várias razões. O nome é bastante repugnante por si, mas se repararmos bem podemos ver ligeiras gotas de sémen a escorrer POR TODA A PARTE. Para adicionar à festa, cheirava sempre a vómito e ácido gástrico, portanto eu nem considerei aproximar-me daqui. Tenho de admitir que considero todos estes fatores bastante javardos, embora um pouco repugnantes. Penso que merecem este lugar na tabela.
                        </p>
                        <img src={require('../../imagens/enterro/image18.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            11. Quem mama não se afoga
                        </h3>
                        <p>
                            Tenho de ser honesto, não esperava nada por tanta obscenidade de estudantes do ISCA, porque parecem-me ser meninos certinhos e bem comportados. Mas também aprendi ao longo da minha vida que os betos podem ser os mais desavergonhados, simplesmente porque carregam com eles o espírito português, enraizado nas suas famílias. Esta barraca merece o 11º lugar meramente pelos desenhos no balcão. Espero que quem os desenhou se sinta mal consigo próprio, mas não posso negar o talento para a coisa.
                        </p>
                        <img src={require('../../imagens/enterro/image19.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            10. O grego certo
                        </h3>
                        <p>
                            No top 10 desta maravilhosa crônica seguem-se as barracas das quais eu e os meus amigos nos rimos genuinamente devido à sua ousadia e “tasqueirice”.

                            O grego certo é uma ótima representação de uma piada falhada relativa a um programa que representa bem a cultura portuguesa. Não sei porque é que algum aluno haveria de pensar que colocar o nome “grego” numa barraca onde as pessoas por norma ingerem líquidos era uma boa ideia. Mas parabéns, fez-me rir. A figura do Fernando Mendes adiciona bastante ao índice de escassez desta barraca.
                        </p>
                        <img src={require('../../imagens/enterro/image20.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            9. FBI
                        </h3>
                        <p>
                            Fumar, beber i ….. foder. Não fui eu que disse, foram eles. E quem teria uma ideia genial destas se não um grupo de engenheiros não é verdade. Às vezes sinto que preciso de um pouco de humor sem piada na minha vida. Porque o facto de acharem que isto tem piada, quando não tem absolutamente nenhuma, fez-me rir. A vida é de facto feita de contradições. Mal construída, delapidada e rasca, tal como eu gosto. Merece o nono lugar sem sombra de dúvida.
                        </p>
                        <img src={require('../../imagens/enterro/image21.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            8. Pimba nela
                        </h3>
                        <p>
                            A alusão ao sexo e a pessoas bastante desprovidas de roupa é algo que os universitários adoram. Não sei se será por falta do mesmo na vida real, ou simplesmente por serem jovens ousados. De qualquer das maneiras, representaram bem o cúmulo da “trolhice” portuguesa, especialmente através do desenho estampado nas nossas caras que se encontra no toldo da barraca. Está incrivelmente bem desenhado e deixou-me bastante desconfortável, o suficiente para me rir muito da vossa imaginação horrível. Parabéns, também merecem o oitavo lugar na lista.
                        </p>
                        <img src={require('../../imagens/enterro/image22.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            7. Dartacão
                        </h3>
                        <p>
                            Não colocaria esta barraca tão alto na classificação se não tivesse reparado nos dois objetos fálicos no canto superior esquerdo que supostamente representam duas espadas. Mas gostei especialmente da dedicação ao desenho do Dartacão a meio do ato sexual com a sua parceira. Mais uma vez, a alusão a cenas sexuais relativas a desenhos para crianças deixa-me um pouco desconfortável, mas acho que o trocadilho e o design da barraca em si merecem o lugar na tabela. Muito mas muito trolha.
                        </p>
                        <img src={require('../../imagens/enterro/image23.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            6. Fodafone Paredes de Couna
                        </h3>
                        <p>
                            Mais uma vez, não esperava nada que o curso de design e o núcleo de rock fossem ter uma ideia tão obscena, mas superaram as minhas expectativas. Desde a roupa interior pendurada à frente da barraca, às várias alusões ao ato sexual no logotipo em si. Penso que não poderiam ter sido mais rascas no vosso toldo, mas acho que é esse o espírito que eu pretendo em todas as barracas. Está especialmente bem decorada por dentro. Tenho que admitir que conseguiram ser bastante tasqueiros, parabéns.
                        </p>
                        <img src={require('../../imagens/enterro/image24.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            5. Shereka
                        </h3>
                        <p>
                            A partir desta posição, ri-me muito dos nomes das barracas quando os vi pela primeira vez.
                            Tenho de admitir que este é um dos nomes mais originais, e nota-se que se esforçaram para levar a originalidade ao pior sítio possível. Os bonecos desenhados ao lado do logo são tão desproporcionais e estranhos que me fizeram rir ainda mais. O nome é, de facto, bastante obsceno e nota-se que foi mesmo pensado para tal. Muito tasqueiro e muito bom.
                        </p>
                        <img src={require('../../imagens/enterro/image25.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            4. Mamma Minha Piçaria
                        </h3>
                        <p>
                            O nome da barraca parece feito por um rapazinho que ainda anda no básico depois de descobrir que as asneiras existem. É mesmo pouco pensado, mal pensado, e tentaram esconder isso através de uma bandeja enorme de pénis pendurados. Fantástico na minha opinião. Gostaria de lhes dar pontos bónus por associarem o nome da barraca ao cantor Diogo Piçarra, e postar em plenas redes sociais. O cyberbullying é real e eu gostei bastante. Muito mas muito javardo da vossa parte.
                        </p>
                        <img src={require('../../imagens/enterro/image26.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            3. Hard Cock
                        </h3>
                        <p>
                            Esta barraca é mais um bom exemplo de que a falta de esforço e originalidade faz toda a diferença na bartolice que emana da mesma. Alguém gritou “Hard Cock”, toda a gente se riu, e decidiram unanimemente construir uma barraca com o nome de pénis ereto. O resto da barraca também adiciona aos pontos de trolhice porque são só rabiscos e enfeites estranhos. Muito mas mesmo muito tasqueiro, senti todo o espírito universitário.
                        </p>
                        <img src={require('../../imagens/enterro/image27.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            2. €urodick
                        </h3>
                        <p>
                            Esta barraca merece o lugar meramente pelo nome. Não entendo a premissa por detrás do mesmo mas acho que se compreendesse não tinha um pingo de piada. Adorei entrar dentro do recinto e ser cumprimentado por um €uroDick na minha cara. O objeto fálico com cara de zangado também adiciona imenso à dimensão da comédia. Eu e os meus amigos não nos conseguíamos parar de rir sempre que passávamos por lá, simplesmente porque emanava estupidez. Merecem sem dúvida o segundo lugar na tabela.
                        </p>
                        <img src={require('../../imagens/enterro/image28.jpg')} alt='' />
                    </div>

                    <div className='container_enterro'>
                        <h3>
                            1. Santa Cona do assobio
                        </h3>
                        <p>
                            Não consigo explicar o que senti ao ver isto espetado na minha cara ao entrar no enterro de Aveiro. Tenho tanto para dizer mas tão pouco ao mesmo tempo. Um toldo maior que o recinto em si, virgem maria em forma de vagina, um design pensado e trabalhado, a frase mais rasca jamais profanada pela boca de um português, e o maior insulto alguma vez visto à religião católica. Isto sim é o espírito de um universitário parolo. Tanta porcaria ao mesmo tempo, ri-me imenso. Parabéns, merecem o primeiro lugar.
                        </p>
                        <img src={require('../../imagens/enterro/image29.jpg')} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enterro