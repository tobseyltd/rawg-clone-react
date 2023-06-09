import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      marginTop={4}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
    >
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardBox key={skeleton}>
            <GameCardSkeleton />
          </GameCardBox>
        ))}

      {!isLoading &&
        data.map((game) => (
          <GameCardBox key={game.id}>
            <GameCard games={game} />
          </GameCardBox>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
