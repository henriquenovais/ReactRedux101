import axios from "axios";

interface IAxiosConfig {
  /**
   * Some description
   *
   *  @param {string} some param used to do a request
   *  @returns {Promise<boolean>} returns true if request was successful
   */
  axiosGet(someParam: string): Promise<boolean>;
}

class AxiosConfig implements IAxiosConfig {
  axiosGet = (someParam: string): Promise<boolean> => {};
}

export const useAxiosConfig = () => new AxiosConfig();
