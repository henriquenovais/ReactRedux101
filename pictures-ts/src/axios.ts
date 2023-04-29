import axios, { AxiosHeaders, AxiosResponse } from "axios";

interface IAxiosConfig {
  /**
   * Some description
   *
   *  @param {string} some param used to do a request
   *  @returns {Promise<boolean>} returns true if request was successful
   */
  axiosGet(
    url: string,
    headers: AxiosHeaders,
    query: Object
  ): Promise<AxiosResponse | null>;
}

class AxiosConfig implements IAxiosConfig {
  axiosGet = async (
    url: string,
    headers: AxiosHeaders,
    query: Object
  ): Promise<AxiosResponse | null> => {
    try {
      const response = await axios.get(url, {
        headers,
        params: {
          query,
        },
      });

      return response;
    } catch (error) {
      console.log(`Axios GET request error: ${error}`);
      return null;
    }
  };
}

export const useAxiosConfig = () => new AxiosConfig();
