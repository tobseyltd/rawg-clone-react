import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        marginTop={4}
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
        spacing={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} games={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
