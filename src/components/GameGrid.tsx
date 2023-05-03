import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface ApiResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<ApiResponse>("/games")
      .then((RESPONSE) => setGames(RESPONSE.data.results))
      .catch((ERROR) => setError(ERROR.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
