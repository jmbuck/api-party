import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import GitHub from './GitHub'
import Maps from './Maps'
import Spotify from './Spotify'
import Nasa from './Nasa'
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
            <NavLink to="/spotifyauth">Spotify API</NavLink>
          </li>
          <li>
            <NavLink to="/maps">Google Maps API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/github' component={GitHub} />
          <Route path='/nasa' component={Nasa} />
          <Route path='/spotifyauth' component={Spotify} />
          <Route path='/maps' component={Maps} />
          <Route render={() => <p>To get started, click one of the links above!</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
