import { FormEvent } from "react";
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

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    handleSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={searchTerm} onChange={handleChange}></input>
      </form>
    </div>
  );
};

export default SearchBar;
