import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface ApiResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
 
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController();

    ApiClient.get<ApiResponse>("/games", { signal: controller.signal })
      .then((RESPONSE) => {
        setGames(RESPONSE.data.results)
        setLoading(false)})
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message)
        setLoading(false)});

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
