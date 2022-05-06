import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Service from './components/service/Service';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
