import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { Routes, Route, Link } from "react-router-dom";
import Detail from './component/Detail';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}


export default App;
