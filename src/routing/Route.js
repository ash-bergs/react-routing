//import React from 'react';

const Route = ({ children, path }) => {
  console.log(children);
  return window.location.pathname === path ? children : null;
};

export default Route;
