import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomaPage from './landing_page/home/HomePage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar/>
      <HomaPage></HomaPage>
      <Footer/>
    </div>
  </React.StrictMode>
);


