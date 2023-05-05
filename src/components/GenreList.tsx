import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImages from "../services/CroppedGameCardImages";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem onClick={() => onSelectedGenre(genre)} key={genre.id}>
          <HStack marginY={5}>
            <Image
              boxSize={12}
              borderRadius={10}
              src={getCroppedImages(genre.image_background)}
            />
            <Link className='genrelink' fontSize={17}>
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
