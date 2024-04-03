//@ts-nocheck
const { h } = preact;
const { useState } = preactHooks;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

import MusicEntry from './music-entry';

const MusicList = ({ songs, loadNextPage, hasNextPage }) => {
  const [activeItemId, setActiveItemId] = useState();

  return html`
    <ol class="music-list">
      ${songs.map((item, index) =>
        MusicEntry({ item, activeItemId, setActiveItemId, index }),
      )}
      ${hasNextPage() &&
      html`
        <input
          type="button"
          class="next-button music-entry"
          value="Показать еще ⏭️"
          onClick=${loadNextPage}
        />
      `}
    </ol>
  `;
};

export default MusicList;
