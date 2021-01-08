import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose(
  (window.devToolsExtensions 
    ? window.devToolsExtensions() 
    : f => f)
  (createStore)));

import "./style/main.scss";

import history from './history'

import Layout from "./components/layout";
import Signin from './components/auth/signin';
import SignUp from './components/auth/signup';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router  history={history}>
        <Layout>
          <Switch>
            <Route patch='/' exact  component={Signin} />
            <Route patch='/signin' exact  component={Signin} />
            <Route patch='/signup' exact  component={SignUp} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
