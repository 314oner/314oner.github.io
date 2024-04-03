//@ts-nocheck
const { h } = preact;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

const Navigation = () => {
  return html`
    <nav><a href="/">Главная</a> | <a href="/about">Обо мне</a></nav>
  `;
};

export default Navigation;
