import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './bookShelf.png';

const Header = () => {
    return (
        <header className="header">
            <nav className='left-nav'>
                <img src={logo} alt={'logo'} className='logo'/>
                <span>MC's Books</span>
            </nav>
            <nav className="right-nav">
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
            </nav>
        </header>
    );
};

export default Header;
