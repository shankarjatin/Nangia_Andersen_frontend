import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Transform Your Hiring Process</h1>
      <p>Streamline your recruitment with our cutting-edge solution.</p>
      <Link to="/register">Get Started</Link>
    </div>
  );
};

export default Home;
