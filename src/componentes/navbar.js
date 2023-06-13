import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleCLick = () => setClick(!click)
    return (
        <>
            <div className="navbar">
                <div className='navbar-container container'>
                    <div className='menu-icon' onClick={handleCLick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <img src={require(`../imagens/navbar/retangulo_agenda.png`)} alt='' />
                            <Link to='/' className='nav-links'>
                                Homepage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <img src={require(`../imagens/navbar/retangulo_artistas.png`)} alt='' />
                            <Link to='../paginas/artistas' className='nav-links'>
                                Artistas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <img src={require(`../imagens/navbar/retangulo_opinioes.png`)} alt='' />
                            <Link to='../paginas/opinioes' className='nav-links'>
                                Opiniões
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <img src={require(`../imagens/navbar/retangulo_dela.png`)} alt='' />
                            <Link to='../paginas/artistas' className='nav-links'>
                                Delá
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <img src={require(`../imagens/navbar/retangulo_sobrenos.png`)} alt='' />
                            <Link to='../paginas/artistas' className='nav-links'>
                                Sobre nós
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar 