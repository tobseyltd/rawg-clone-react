import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        marginTop={4}
        columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
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
    </>
  );
};

export default GameGrid;
