//@ts-nocheck
const { h } = preact;
const { useState, useRef } = preactHooks;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

const AudioPreview = ({ previewUrl }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const changePlaying = () => {
    console.log('changePlaying');
    if (!audioEl.current) return;

    if (isPlaying) {
      audioEl.current.pause();
      setIsPlaying(false);
    } else {
      audioEl.current.play();
      setIsPlaying(true);
    }
  };
  return html`
    <audio
      ref=${audioEl}
      src=${previewUrl}
      type="audio/mp4"
      onEnded=${changePlaying}
    >
      Ваш браузер не поддерживает
      <code>воспроизведение</code>
    </audio>
    <input
      class="audio-button"
      type="button"
      value=${isPlaying ? 'Пауза' : 'Слушать'}
      onClick=${changePlaying}
    />
  `;
};

export default AudioPreview;
