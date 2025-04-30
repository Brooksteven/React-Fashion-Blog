import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Nav from './components/Nav'
import './App.css';

const App = () => {
  return (
    <div className = 'container'>
      <Header />
      <main>
        <Article />
        <Article />
      </main>
      <Footer />
    </div>
  );
};
export default App;
