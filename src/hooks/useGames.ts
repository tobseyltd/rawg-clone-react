import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

const useGames = () => {
  interface Games {
    id: number;
    name: string;
  }

  interface ApiResponse {
    count: number;
    results: Games[];
  }

  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    ApiClient.get<ApiResponse>("/games", { signal: controller.signal })
      .then((RESPONSE) => setGames(RESPONSE.data.results))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message)});

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
