import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './landingPage/signUp/SignUp'
import AboutPage from './landingPage/about/AboutPage'
import ProductPage from './landingPage/products/ProductPage'
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from './landingPage/support/SupportPage'
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/footer';
import NotFoundPage from './landingPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);