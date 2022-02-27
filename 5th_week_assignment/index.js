import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { reactReducer } from './reduxReducer/Reducer';
const store=createStore(reactReducer);
const Ex=()=>{
  return <>
  <Provider store={store}>
  <App/>
  </Provider>
  </>
}
ReactDom.render(<Ex/>,document.getElementById('root'));

