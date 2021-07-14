import React from 'react';

import Link from '../routing/Link';

const Nav = () => {
  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
