import React, { useState } from "react";
import "./App.css";
import { store } from "./store";
import SongPlaylist from "./components/SongPlaylist";
import MoviePlaylist from "./components/MoviePlaylist";

function App() {
  const [songs, setSongs] = useState<Array<string>>([]);
  const [movies, setMovies] = useState<Array<string>>([]);

  const handleResetClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setSongs([]);
    setMovies([]);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center w-full h-16">
        <button
          className="w-48 h-8 bg-orange-700 rounded-lg text-center text-xl text-white font-bold"
          onClick={(e) => handleResetClick(e)}
        >
          Reset playlists
        </button>
      </div>

      <div className="h-0.5 w-full bg-gray-200" />
      <SongPlaylist
        songs={songs}
        addSong={(value) => setSongs((current) => current.concat([value]))}
      />
      <div className="h-0.5 w-full bg-gray-200" />
      <MoviePlaylist
        movies={movies}
        addMovie={(value) => setMovies((current) => current.concat([value]))}
      />
    </div>
  );
}

export default App;
