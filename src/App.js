
import React, { createContext, useContext } from 'react'
import './App.css';
import Header from './components/Header';
import ComA from './components/ComA';
import { useState } from 'react';

const AppState=createContext();
function App() {
  const[data,setData]=useState("Hardik Dheer");
  const[name,setName]=useState({gender:'male',age:20});
  return (
    <div className="App">
      <AppState.Provider value={{data,name}}>
      <Header/>
      <ComA/>
      </AppState.Provider>
    </div>
  );
}

export default App;
export {AppState}
