import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Books from './books';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path ='/' element={<Home />} />
                <Route path ='/books' element={<Books />} />
            </Routes>
        </Router>
    );
};

export default App;