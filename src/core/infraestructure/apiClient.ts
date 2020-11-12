import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface Api {
  // For this example only needed GET. Missing: POST, PUT and DELETE methods
  get<P>(path: string, params?: any): Promise<P>
}

class AxiosApi implements Api {
  protected instance: AxiosInstance

  constructor(baseURL: string, auth = undefined, withCredentials = false) {
    this.instance = axios.create({
      baseURL,
      auth,
      withCredentials: withCredentials
    })
  }

  get<P>(path: string, params?: any, options?: AxiosRequestConfig): Promise<P> {
    return new Promise<P>((resolve, reject) => {
      this.instance
        .get(path, { ...options, params })
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error)
        })
    })
  }
}
// I've used Datamuse API, a word-finding API. (https://www.datamuse.com/api/)
// which suits perfectly with the goal of this technical test
export const apiUrl = "https://api.datamuse.com"

export const ApiClient = new AxiosApi(apiUrl) as Api