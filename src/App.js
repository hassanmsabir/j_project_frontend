import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Button} from "antd"
import AdminView from './Pages/AdminView';
import UserView from './Pages/UserView';

function App() {
  // const fetchMessages = async () => {
  //   const response = await fetch('/api/', {
  //     headers: { 'Cache-Control': 'no-cache' }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
  
  // useEffect(() => {
  //   fetchMessages();
  // }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminView />} />
        <Route path="/" element={<UserView />} />
      </Routes>
    </Router>
  );
}

export default App;
