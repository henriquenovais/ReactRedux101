import { HTTPClient } from "../axios";

const Authorization = "Client-ID 1LoCsDNsaIXCJjE0G1bt9FYiE8skBdjQHVlKUV7dkc0";
class UnsplashService extends HTTPClient {
  getImage = async (searchTerm: string): Promise<any> => {
    const url = `search/photos?query=${searchTerm}`;
    const response = await this.get<any>(url, {
      Authorization,
    });

    return response.data;
  };
}

const url = "https://api.unsplash.com/";
const unsplashService = new UnsplashService(url);

export default unsplashService;
