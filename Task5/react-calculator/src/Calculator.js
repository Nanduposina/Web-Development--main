import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (value) => (
    <button className="calc-button" onClick={() => handleButtonClick(value)}>
      {value}
    </button>
  );

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map(renderButton)}
        {['4', '5', '6', '*'].map(renderButton)}
        {['1', '2', '3', '-'].map(renderButton)}
        {['0', '.', '=', '+'].map(renderButton)}
        {renderButton('C')}
      </div>
    </div>
  );
};

export default Calculator;
