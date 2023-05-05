import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameMetaScore from "./GameMetaScore";
import getCroppedImages from "../services/CroppedGameCardImages";

interface Props {
  games: Games;
}

const GameCard = ({ games }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={getCroppedImages(games.background_image)}
          alt={games.name}
        />

        <CardBody>
          <HStack
            justifyContent={"space-between"}
            alignContent={"center"}
           
          >
            <PlatformIconList
              platforms={games.parent_platforms.map(({ platform }) => platform)}
            />
            <GameMetaScore metascore={games.metacritic} />
          </HStack>

          <Heading  marginTop={2} size={"md"}>{games.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
