import React from "react";
import "./App.css";
import SongPlaylist from "./components/SongPlaylist";
import MoviePlaylist from "./components/MoviePlaylist";
import { useDispatch } from "react-redux";
import { RESET } from "./store";

function App() {
  const dispatch = useDispatch();

  const handleResetClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch({ type: RESET });
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
      <SongPlaylist />
      <div className="h-0.5 w-full bg-gray-200" />
      <MoviePlaylist />
    </div>
  );
}

export default App;
