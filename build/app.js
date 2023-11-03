/* global htmPreact */
const { h, render, Component } = preact;
const { useState, useEffect } = preactHooks;
const { Router } = preactRouter;

import htm from "https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js";
import useData from './hooks/useData.js'
import api from './api/index.js';

const html = htm.bind(h);

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  return html`
    <button onClick=${increment}>
      Count: ${count}
    </button>
  `;
};

const Nav = () => html`
  <nav>
    <a href="/">home</a> | <a href="/about">about</a>
  </nav>
`;
const Home = () => html`
  <p>Home</p>
  <${Counter} />
`;
const About = () => html`
  <p>About</p>
`;
const App = () => {
  const [
    searchTerm,
    setSearchTerm,
    loadNextPage,
    hasNextPage,
    getResultsCount,
  ] = useData();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get.data();
      setData(response);
    };

    fetchData();
  }, []);
  return html`
  <header>
    <${Nav} />
  </header>
  <main>
    <div>
      ${data}
    </div>
    <${Router}>
      <${Home} path="/" />
      <${About} path="/about" />
      <${Home} default />
    <//>
  </main>
`;
}

render(html`<${App}/>`, document.getElementById('app'))
