import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
                <ul>
                    <nav className='left-nav'>
                        <li>MC's Books</li>
                    </nav>
                    <nav className="right-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                    </nav>
                </ul>
        </header>
    );
};

export default Header;