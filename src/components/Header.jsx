import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/img/PlatziVideo.png'
import userIcon from '../assets/static/img/usuario.png';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={logo} alt="logo Platzi Video" />
        </Link>
        
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Avatar de usuario" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li>
                    <Link to="login">Iniciar Sesión</Link>
                </li>
            </ul>
        </div>
    </header>

);

export default Header;