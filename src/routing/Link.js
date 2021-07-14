import React from 'react';

const Link = ({ href, className = 'link', children }) => {
  // custom click handler
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
