import { HTTPClient } from "../axios";

class UnsplashService extends HTTPClient {
  getImage = async (searchTerm: string): Promise<any> => {
    const url = `search/photos?query=${searchTerm}`;
    const response = await this.get<any>(url);

    return response.data;
  };
}

const url = "https://api.unsplash.com/";
const unsplashService = new UnsplashService(url);

export default unsplashService;
