import React from 'react';

import { lackingFive, episode } from './helpers/data';
import './App.css';

function App() {
  const [gyosu, setGyosu] = React.useState(1);
  const [episodeNumber, setEpisodeNumber] = React.useState(13);

  return (
    <div className="App">
      <header>
        <span className="tagline">
          <h1>Hospital Playlist Stills</h1>
          <span className="tagline--credit">
            a <a href="https://karencumlat.ca">Karen Cumlat</a> project
          </span>
        </span>

        <nav>
          {episode.map((epi, index) => {
            const currIndex = index;

            return (
              <button
                key={epi.id}
                className={
                  currIndex === episodeNumber - 1
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => setEpisodeNumber(epi.id)}
              >
                E{epi.id}
              </button>
            );
          })}
        </nav>
      </header>
      <main>
        {lackingFive.map((five, index) => {
          const episodeNo = episodeNumber;
          const imgUrl = `/images/${episodeNo}-${five.tag}.jpg`;

          return (
            <div
              key={five.tag}
              className={index === gyosu ? 'panel active' : 'panel'}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${imgUrl})`,
              }}
              onClick={() => setGyosu(lackingFive.indexOf(five))}
            >
              <h3>{five.name}</h3>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
