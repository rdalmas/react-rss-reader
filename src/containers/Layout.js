import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="main">
      <h1>Hello, world!</h1>
      {children}
    </div>
  );
}
