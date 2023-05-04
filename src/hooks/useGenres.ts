import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

interface Genres {
    id: number;
    name: string;
}

interface ApiResponse {
    id: number;
    results: Genres[]
}

const useGenres = () => {

  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController();

    ApiClient.get<ApiResponse>("/genres", { signal: controller.signal })
      .then((RESPONSE) => {
        setGenres(RESPONSE.data.results)
        setLoading(false)})
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message)
        setLoading(false)});

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres