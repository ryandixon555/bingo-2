import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React Router
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Scores from './components/Scores';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/scores" component={Scores} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
