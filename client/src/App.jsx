import React from 'react';
import Routes from './routes.jsx';
import Nav from './templates/Nav.jsx';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}