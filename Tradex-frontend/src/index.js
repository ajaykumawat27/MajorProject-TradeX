import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from "react-cookie";
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './landingPage/signUp/SignUp'
import LogIn from './landingPage/signUp/LogIn'
import AboutPage from './landingPage/about/AboutPage'
import ProductPage from './landingPage/products/ProductPage'
import PricingPage from './landingPage/pricing/PricingPage'
import SupportPage from './landingPage/support/SupportPage'
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/footer';
import NotFoundPage from './landingPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth/signup' element={<SignUp/>}/>
      <Route path='/auth/login' element={<LogIn/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
  </CookiesProvider>
  </BrowserRouter>
);
