import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/CroppedGameCardImages";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginY={5}>
            <Image boxSize={12} borderRadius={5} src={getCroppedImages(genre.image_background)} />
            <Text fontSize={17}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
