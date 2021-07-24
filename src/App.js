import './App.css';
import React from 'react';
import Content from './Layout/Content';
import Header from './Layout/Header';
import Web from './Layout/Web';
import Sidebar from './Layout/Sidebar';
import MyContent from './Layout/MyContent';
import Section from './Layout/Section';
import HookFok from './Layout/HookFok';
import Footer from './Layout/Footer';



function App() {
  return (
    <div className="app">
        <div className="bg-gray-900">
            <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Web />
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <MyContent />
        </div>
        <div>
          <Section />
        </div>
        <div>
          <HookFok />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
