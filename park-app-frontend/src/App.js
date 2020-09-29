import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './App.css';

import AddState from './components/states/AddState'



function App() {
  return (
    <div>
      <h1> National Parks App </h1>
      <AddState />
    </div>
  );
}

export default App;
