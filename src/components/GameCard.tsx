import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameMetaScore from "./GameMetaScore";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={games.background_image} alt={games.name} />
        <CardBody>
          <Heading size={"lg"}>{games.name}</Heading>

          <HStack justifyContent={"space-between"} alignContent={"center"} marginTop={2}>
            <PlatformIconList
              platforms={games.parent_platforms.map(({ platform }) => platform)}
            />
            <GameMetaScore metascore={games.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
