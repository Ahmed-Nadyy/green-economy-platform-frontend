import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          {/* Router configuration will go here */}
        </div>
      </Router>
    </Provider>
  );
        
}

export default App
