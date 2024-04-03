//@ts-nocheck
const { h } = preact;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';
//components
import Counter from '../components/counter';

const html = htm.bind(h);

const Home = () => {
  return html`
    <p>Главная</p>
    <${Counter} />
  `;
};

export default Home;
