import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is where you can find information about Caleb's website.</p>
      <img
        src={require('./whitelion.jpg')}
        alt="Home"
        width="300"
        height="200"
      />
    </div>
  );
};

export default Home;
