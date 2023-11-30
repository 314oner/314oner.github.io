/* global htmPreact */
const { h, render, Component } = preact;
const { useState, useEffect } = preactHooks;
const { Router } = preactRouter;

import htm from "https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js";

//pages
import Home from "./pages/home.js";
import About from "./pages/about.js";
//components
import Search from "./components/search.js";
import MusicList from "./components/music-list.js";
import Navigation from "./components/navigation.js";
//apis
import useMusicData from "./hooks/useMusicData.js";
import { apiStates, useApi } from "./hooks/useApi.js";

const html = htm.bind(h);

const App = () => {
  const [
    songs,
    searchTerm,
    setSearchTerm,
    loadNextPage,
    hasNextPage,
    getResultsCount,
  ] = useMusicData();

  const renderApisResponse = () => {
    const { state, error, data } = useApi("data");
    switch (state) {
      case apiStates.ERROR:
        return html`<p>Сервер недоступен: ${error || 'Критическая ошибка'}</p>`
      case apiStates.SUCCESS:
        return (
          html`
          <p>Данные:</p>
          <ul>${data.greeting}
          </ul>
        `
        );
      default:
        return html`<p>Загрузка..</p>`;
    }
  }
  return html`
  <header>
    <${Navigation} />
  </header>
  <main>
    <h1 class="results-summary">
      ${renderApisResponse()}
    </h1>
    <${Router}>
      <${Home} path="/" />
      <${About} path="/about" />
      <${Home} default />
    <//>
    ${Search({ setSearchTerm })}
    <h2 class="results-summary">
      ${songs.length > 0
      ? `Найдено ${songs.length
      } ${getResultsCount()} песен по запросу "${searchTerm}" ♫`
      : `Попробуйте поискать свою любимую песню!`}
    </h2>
    ${MusicList({ songs, loadNextPage, hasNextPage })}
  </main>
`;
}
render(html`<${App}/>`, document.getElementById('app'))
