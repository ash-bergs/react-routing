//import React from 'react';
import { useEffect } from 'react';

const Route = ({ children, path }) => {
  useEffect(() => {
    // change handler
    const onPathChange = () => {
      console.log('Path has been changed!');
    };
    // turn on event listener and its handler ⬆
    window.addEventListener('popstate', onPathChange);
    // 🧼 anonymous cleanup function
    return () => {
      window.removeEventListener('popstate', onPathChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
