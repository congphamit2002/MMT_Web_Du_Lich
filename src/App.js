import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hotel from './components/pages/Hotel';
import Food from './components/pages/Food';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hotel' component={Hotel} />
          <Route path='/food' component={Food} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
