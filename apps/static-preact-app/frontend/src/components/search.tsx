//@ts-nocheck
const { h } = preact;
const { useState } = preactHooks;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

const Search = ({ setSearchTerm }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = (evt) => {
    setInputText(evt.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputText);
  };

  return html`
    <div class="search">
      <input
        type="text"
        placeholder="Найти песню ♪"
        value=${inputText}
        onInput=${handleInput}
        onChange=${handleSearch}
      />
      <input
        type="button"
        onClick=${handleSearch}
        onTouchEnd=${handleSearch}
        value="Search"
      />
    </div>
  `;
};

export default Search;
