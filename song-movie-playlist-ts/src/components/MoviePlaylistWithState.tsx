import { FC, useState } from "react";

interface IMoviePlaylistWithState {
  addMovie: (input: string) => void;
  movies: string[];
}

const MoviePlaylistWithState: FC<IMoviePlaylistWithState> = ({
  addMovie,
  movies,
}) => {
  const [isAddMovie, setIsAddMovie] = useState<boolean>(false);
  const [movieName, setMovieName] = useState<string>("");

  const handleAddMovieClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsAddMovie(true);
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

    addMovie(movieName);
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
          <span>{current}</span>
        ))}
      </div>
    </div>
  );
};

export default MoviePlaylistWithState;
