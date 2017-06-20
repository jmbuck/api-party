import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import GitHub from './GitHub'
import Maps from './Maps'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/nasa">NASA API</NavLink>
          </li>
          <li>
            <NavLink to="/spotify">Spotify API</NavLink>
          </li>
          <li>
            <NavLink to="/maps">Google Maps API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/github' component={GitHub} />
          <Route path='/nasa' render={() => <h1>NASA</h1>} />
          <Route path='/spotify' render={() => <h1>SPOTIFY</h1>} />
          <Route path='/maps' component={Maps} />
          <Route render={() => <p>To get started, click one of the links above!</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
