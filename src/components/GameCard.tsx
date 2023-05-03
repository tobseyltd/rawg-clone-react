import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
          <PlatformIconList
            platforms={games.parent_platforms.map(({ platform }) => platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
