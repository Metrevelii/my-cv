import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__info">
                    <h3 className="header__info-name">Zauri Metreveli</h3>
                    <h4 className="header__info-proff">Front-End Web Developer</h4>
                    <h5 className="header__info-age">Age 25</h5>
                </div>
                <div className="header__info-border">
                    <div className="header__info-img"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;