import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Assets/Common.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { rootReducer } from './Store/Reducers'
import { Provider, connect } from 'react-redux';
import { setAuthLogin, setAuthStatus, setLastScore } from './Store/Actions'


const store = createStore(rootReducer);


const mapStateToProps = (state) => {
  return {
    login: state.login,
    authorized: state.authorized,
    lastScore: state.lastScore
  }
}

const mapDispatchToProps = {
  setAuthLogin,
  setAuthStatus,
  setLastScore
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <WrappedApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
