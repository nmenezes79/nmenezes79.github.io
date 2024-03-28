import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Sidebar />
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;