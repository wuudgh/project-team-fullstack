import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import AboutUs from './client/Components/AboutUs';
import Header from './client/Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
