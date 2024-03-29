import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";
import { MoviesPlaylistState } from "../store/slices/moviesSlice";

const MoviePlaylist: FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: MoviesPlaylistState) => state.movies);

  const [isAddMovie, setIsAddMovie] = useState<boolean>(false);
  const [movieName, setMovieName] = useState<string>("");

  const handleAddMovieClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsAddMovie(true);
  };

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeMovie(value));
  };

  const handleNewMovieChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setMovieName(event.target.value);
  };

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addMovie(movieName));
    setMovieName("");
    setIsAddMovie(false);
  };

  return (
    <div className="w-fill flex flex-col items-center gap-3">
      <div className="w-fill flex flex-row items-center justify-center gap-3">
        <h1 className="text-4xl">Movies Playlist</h1>
        {!isAddMovie && (
          <button
            className="w-24 bg-orange-700 rounded-lg text-center text-white font-bold"
            onClick={(e) => handleAddMovieClick(e)}
          >
            Add movie
          </button>
        )}
      </div>
      {isAddMovie && (
        <div className="w-48 flex flex-row content-center gap-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="font-bold">New song name:</label>
            <input
              className="w-48 border-2 rounded-lg border-black"
              type="text"
              onChange={(e) => handleNewMovieChange(e)}
              value={movieName}
              autoFocus
            />
            <button
              className="w-48 h-8 bg-orange-700 rounded-lg text-center text-white font-bold"
              onClick={(e) => handleSubmit(e)}
            >
              Add new movie
            </button>
          </form>
        </div>
      )}
      <div className="flex flex-col items-center">
        {movies.map((current) => (
          <div
            className="w-fill flex flex-row items-center h-8 gap-3"
            key={current}
          >
            {current}
            <button
              className="w-8 h-8 bg-orange-700 rounded-lg text-center text-white font-bold"
              onClick={(e) => handleCloseClick(e, current)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePlaylist;
