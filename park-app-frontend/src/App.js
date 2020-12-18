// base imports
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './App.css';

// client side routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// reducers
import StateReducer from './reducers/StateReducer'

// components
import AddState from './components/states/AddState'
import States from './components/states/States'
import Login from './components/users/Login'

const store = createStore( StateReducer, applyMiddleware(thunk) )

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <div>
              <h1> National Parks App </h1>
              <AddState />
              <States />
            </div>
          </Route>

        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
