import React from 'react';

const Animals = () => {
  return (
    <div>
      <h1>Animals</h1>
      <p>Here you can find information about different animals.</p>
      <img
        src={require('./scwheatonterrier.jpg')}
        alt="Animals"
        width="300"
        height="200"
      />
    </div>
  );
};

export default Animals;
