import { FC, useEffect, useState } from "react";
import unsplashService from "./services/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./App.css";

const App: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<Array<string> | undefined>(
    undefined
  );

  useEffect(() => {
    const getSearchResults = async () => {
      if (searchTerm) {
        const { results } = await unsplashService.getImage(searchTerm);
        const urlList: Array<string> = results.map(
          (resultObj: any) => resultObj.links.download
        );

        setSearchResults(urlList);
      }
    };

    getSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <div>
        {/* {imageUrl && <img src={imageUrl} alt="cool" width={500} />} */}
        <SearchBar handleSubmit={setSearchTerm} />
      </div>
      {searchResults && <ImageList arrUrl={searchResults} />}
    </div>
  );
};

export default App;
