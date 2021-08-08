import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/img/PlatziVideo.png'
import userIcon from '../assets/static/img/usuario.png';

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="logo Platzi Video" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Avatar de usuario" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>

);

export default Header;