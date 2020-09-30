// base imports
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './App.css';

// reducers
import StateReducer from './reducers/StateReducer'

// components
import AddState from './components/states/AddState'
import States from './components/states/States'

const store = createStore( StateReducer, applyMiddleware(thunk) )

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1> National Parks App </h1>
        <AddState />
        <States />
      </div>
    </Provider>
  );
}

export default App;
