import React from 'react';
import './home.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
        <Helmet>
            <style>{'body { background-color: #736372; }'}</style>
        </Helmet>
      <h1>Welcome to the Home Page</h1>
      {/* Other content for the Home page */}
    </div>
  );
};

export default Home;