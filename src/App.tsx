// src/App.tsx
import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles.ts';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Downloads from './components/Downloads';
import Author from './components/Author.tsx';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Hero />
      <About />
      <Downloads />
      <Author />
      <Footer />
    </>
  );
}

export default App;