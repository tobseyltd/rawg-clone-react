import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameMetaScore from "./GameMetaScore";
import getCroppedImages from "../services/CroppedGameCardImages";
import GameCardEmojiRating from "./GameCardEmojiRating";

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
          <HStack justifyContent={"space-between"} alignContent={"center"}>
            <PlatformIconList
              platforms={games.parent_platforms.map(({ platform }) => platform)}
            />
            <GameMetaScore metascore={games.metacritic} />
          </HStack>

          <HStack justifyContent="space-between" marginTop={2} alignContent='center'>
            <Heading size={"md"}>
              {games.name}
            </Heading>
            <GameCardEmojiRating rating={games.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
