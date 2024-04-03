//@ts-nocheck
const { h } = preact;
const { useState } = preactHooks;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return html` <button onClick=${increment}>Счетчик: ${count}</button> `;
};

export default Counter;
