import React from  'react'
import './Header.css';

import smallRight from '../../assets/icons/small-right.png'
import smallLeft from '../../assets/icons/small-left.png'
import SearchIcon from '../../assets/icons/search.png'

export default function Header () {
    return (
        <>
        <nav className="header_navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src={smallLeft} alt='' />
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt='' />
            </button>

            <div className="header_search">
                <img src={SearchIcon} alt='' />
                <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header_login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </div>
    </nav>
    </>
    );
}