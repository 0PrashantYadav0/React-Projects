import React from 'react'
import './App.css';
import { Article, Feature, CTA, Brand, Navbar} from './components';
import {Header, Footer , Blog, Possibilites,  Features, WhatGPT3} from './containers';


function App() {
  return (
    <div className='gradient__bg'>
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilites />
      <Blog />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
