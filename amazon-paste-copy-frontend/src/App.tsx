import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Modules/Header/Header';
import Footer from './Modules/Footer/Footer';
import Body from './Modules/Body/Body';



function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
