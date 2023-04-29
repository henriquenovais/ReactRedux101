import axios, { AxiosHeaders, AxiosResponse } from "axios";

interface IAxiosConfig {
  /**
   * Does a HTTP GET request using Axios
   *
   *  @param {string} url - url to be used in the request
   *  @param {AxiosHeaders} headers - headers of the request
   *  @param {Object} query - request query params
   *  @returns {Promise<AxiosResponse | null>} request response
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
