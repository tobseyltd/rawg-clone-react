import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImages from "../services/CroppedGameCardImages";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem onClick={() => onSelectedGenre(genre)} key={genre.id}>
          <HStack marginBottom={4}>
            <Image
              boxSize={12}
              borderRadius={10}
              src={getCroppedImages(genre.image_background)}
            />
            <Link
              textDecoration={
                genre.id === selectedGenre?.id ? "underline" : "normal"
              }
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              className='genrelink'
              fontSize={17}
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
