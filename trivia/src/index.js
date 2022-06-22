import React from 'react';
import ReactDOM from 'react-dom/client';
import TriviaApp from "./TriviaApp";
import './styles/styles.scss';
//  * Store
import { store } from "./redux/store";
import { Provider } from "react-redux";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>

    <TriviaApp />
  </Provider>
);
