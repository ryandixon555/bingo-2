import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React Router
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Scores from './components/Scores';

import styled from 'styled-components';

const MyRouterUl= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    text-align: center;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    color: white;
    width: 50%;
    margin: 0 auto;
`

const MyRouterLi = styled.div`
 width: 50%;
 font-size: 22px;
`
const routing = (
    <Router>
      <div>
        <MyRouterUl>
          <MyRouterLi>
            <Link to="/">Home</Link>
          </MyRouterLi>
          <MyRouterLi>
            <Link to="/scores">Scores</Link>
          </MyRouterLi>
        </MyRouterUl>
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
