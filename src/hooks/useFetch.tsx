import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export function useFetch<T = unknown>(url: string, requestId: string, config?: AxiosRequestConfig) {

  const { data, isFetching, error } = useQuery<T>(requestId, async () => {
    const response = await api.get(url, config)
    return response.data
  }, {
    staleTime: 1000 * 60 /* 1 min */
  })

  return { data, error, isFetching }
}