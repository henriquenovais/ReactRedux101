import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";
import { SongsPlaylistState } from "../store/slices/songsSlice";

const SongPlaylist: FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: SongsPlaylistState) => state.songs);

  const [isAddSong, setIsAddSong] = useState<boolean>(false);
  const [songName, setSongName] = useState<string>("");

  const handleAddSongClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setIsAddSong(true);
  };

  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeSong(value));
  };

  const handleNewSongChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    setSongName(event.target.value);
  };

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addSong(songName));
    setSongName("");
    setIsAddSong(false);
  };

  return (
    <div className="w-fill flex flex-col items-center gap-3">
      <div className="w-fill flex flex-row items-center justify-center gap-3">
        <h1 className="text-4xl">Songs Playlist</h1>
        {!isAddSong && (
          <button
            className="w-24 bg-orange-700 rounded-lg text-center text-white font-bold"
            onClick={(e) => handleAddSongClick(e)}
          >
            Add song
          </button>
        )}
      </div>
      {isAddSong && (
        <div className="w-48 flex flex-row content-center gap-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="font-bold">New song name:</label>
            <input
              className="w-48 border-2 rounded-lg border-black"
              type="text"
              onChange={(e) => handleNewSongChange(e)}
              value={songName}
              autoFocus
            />
            <button
              className="w-48 h-8 bg-orange-700 rounded-lg text-center text-white font-bold"
              onClick={(e) => handleSubmit(e)}
            >
              Add new song
            </button>
          </form>
        </div>
      )}
      <div className="flex flex-col items-center">
        {!!songs.length &&
          songs.map((current) => (
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

export default SongPlaylist;
