//@ts-nocheck
const { h } = preact;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';
//fns
import useAverageColor from '../hooks/useAverageColor';
//components
import AudioPreview from './audio-preview';
const html = htm.bind(h);

const MusicEntry = ({ item, activeItemId, setActiveItemId }) => {
  const name = item.trackName || item.collectionName;
  const id = item.trackId || item.collectionId;
  const isActive = activeItemId == id;
  const artworkUrl = item.artworkUrl100 || item.artworkUrl60;
  const iTunesUrl = item.trackViewUrl || item.collectionViewUrl;
  const price = (item.trackPrice || item.collectionPrice) + ' ' + item.currency;

  const averageColor = useAverageColor(artworkUrl);

  const handleClick = () => {
    setActiveItemId(id);
  };

  return html`
    <li
      class="music-entry ${isActive && 'active'}"
      style="--average-color: ${averageColor};"
      onClick=${handleClick}
    >
      <article>
        <div class="backdrop-container">
          <div class="under-backdrop">
            <p>Купить на <a href=${iTunesUrl}>iTunes</a> за <b>${price}</b></p>
            ${item.previewUrl &&
            AudioPreview({ previewUrl: item.previewUrl, isActive })}
          </div>
          <div class="image-backdrop">
            <img src=${artworkUrl} />
          </div>
        </div>
        <h1>${name}</h1>
        <p>${item.wrapperType} by ${item.artistName}</p>
      </article>
    </li>
  `;
};

export default MusicEntry;
