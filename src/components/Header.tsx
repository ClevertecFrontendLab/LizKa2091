import './Header.css';

import { JSX } from 'react';

import logo from '~/images/logo.png';
import profileImage from '~/images/profile-image.png';

const Header = (): JSX.Element => (
    <header className='header'>
        <div className='header__inner'>
            <div className='header__left'>
                <img src={logo} className='header__logo' alt='yee da' />
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>Главная</li>
                    </ul>
                </nav>
            </div>
            <div className='header__profile header__right'>
                <img src={profileImage} className='header__profile-image' alt='аватарка' />
                <div className='header__profile-text-inner'>
                    <p className='header__profile-title'>Екатерина Константинопольская</p>
                    <p className='header__profile-subtitle'>@bake_and_pie</p>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
