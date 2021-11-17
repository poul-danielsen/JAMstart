import React from 'react';
import './variables.css';
import './global.css';
import Seo from './Seo';
import Navigation from './Navigation';
import Footer from './Footer';
const Template = ({ children }) => (
  <>
    <Seo />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);


export default Template;
