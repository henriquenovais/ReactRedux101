import axios, { AxiosInstance, AxiosResponse, Method } from "axios";

interface IRequestHeader {
  authorization_action?: string;
  authorization?: string;
}

export abstract class HTTPClient {
  protected http: AxiosInstance;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
    });
  }

  private baseRequest = <T, R>(
    method: Method,
    url: string,
    data?: T,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.http.request({
      data,
      headers: { ...headers },
      method,
      url,
    });
  };

  protected delete = <R>(
    url: string,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.baseRequest<undefined, R>("DELETE", url, undefined, headers);
  };

  protected get = <R>(
    url: string,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.baseRequest<undefined, R>("GET", url, undefined, headers);
  };

  protected patch = <T, R>(
    url: string,
    data: T,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.baseRequest<T, R>("PATCH", url, data, headers);
  };

  protected post = <T, R>(
    url: string,
    data: T,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.baseRequest<T, R>("POST", url, data, headers);
  };

  protected put = <T, R>(
    url: string,
    data: T,
    headers?: IRequestHeader
  ): Promise<AxiosResponse<R>> => {
    return this.baseRequest<T, R>("PUT", url, data, headers);
  };
}
