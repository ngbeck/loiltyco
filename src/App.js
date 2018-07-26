import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import homePage from './components/pages/homePage';
import playerStats from './components/pages/playerStats';
import contact from './components/pages/contact';
import salary from './components/pages/salary';
import teamStats from './components/pages/teamStats';


// includes
import '/Users/Nathan/Development/loiltyco/src/Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <Header />

          <Route exact path='/' component={homePage} />
          <Route exact path ='/playerstats' component={playerStats} />
          <Route exact path ='/contact' component={contact} />
          <Route exact path ='/salary' component={salary} />
          <Route exact path ='/teamstats' component={teamStats} />

      </div>
      </Router>
    );
  }
}

export default App;
