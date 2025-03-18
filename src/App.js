import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
// import { type } from '@testing-library/user-event/dist/type';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";

function App() {

  
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled',"Success");
      // document.title = "Dark mode enable";
      // setInterval(() => {
      //   document.title = "Sushant";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Hello";
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled',"Success");
      // document.title = "Light mode enable";
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },1000);
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtiles" aboutText="AboutText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
    
      <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} /> 
      <Route exact path="/" element={<TextForm />} />
      </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;