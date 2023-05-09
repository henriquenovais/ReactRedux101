import { FormEvent, MouseEvent } from "react";
import { BaseSyntheticEvent, FC, useState } from "react";
import "./SearchBar.css";

interface ISearchBar {
  handleSubmit: (term: string) => void;
}

const SearchBar: FC<ISearchBar> = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    setSearchTerm(event.target.value);
  };

  const onSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    handleSubmit(searchTerm);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          className="search-bar"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
