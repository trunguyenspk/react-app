import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  
  document.getElementById('root')
);

/*function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}*/

serviceWorker.unregister();
