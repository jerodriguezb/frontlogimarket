import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';


// import server from './server';

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3004;

// server.use(middlewares);
// server.use(router);

// server.listen(port
// server()

ReactDOM.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);


