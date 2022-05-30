import React from 'react';
import Routes from './routes.jsx';
import Nav from './templates/Nav.jsx';
import Logo from './templates/Logo.jsx';


export default function App() {
  return (
    <div>
      <Logo />
      <Nav />
      <Routes />
    </div>
  );
}