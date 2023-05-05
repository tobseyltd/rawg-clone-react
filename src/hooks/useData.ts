import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";


export interface ApiResponse<T> {
    id: number;
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController();

    ApiClient.get<ApiResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((RESPONSE) => {
        setData(RESPONSE.data.results)
        setLoading(false)})
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message)
        setLoading(false)});

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
}

export default useData