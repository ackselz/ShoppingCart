import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Home() {

  return (
    <div className="home__container">
        <h1 className="home__hero">Shopi is (not) the next big e-commerce platform</h1>
        <p className="home__desc">Made with ReactJS</p>
    </div>
  );
}

export default Home;