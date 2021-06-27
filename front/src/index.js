import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import Cookies from 'universal-cookie';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import root from "./redux/root";


const store = createStore(
    root,
    composeWithDevTools(applyMiddleware(thunk))
);

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const cookies = new Cookies();
    axios.defaults.headers.common['X-XSRF-TOKEN'] = cookies.get("XSRF-TOKEN");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <Route component={App} />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
