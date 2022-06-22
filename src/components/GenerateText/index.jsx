import React from 'react';
// import { useLoremIpsum } from 'use-lorem-ipsum';

const Input = () => {
  return (
    <div className="generate-text">
      <form className="form">
        <div className="group-form">
          <input type="text" className="input" />
          <button type="button" className="btn">
            Generate Lorem Ipsum
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
