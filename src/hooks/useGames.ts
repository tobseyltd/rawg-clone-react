import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null) => useData<Games>('/games', { 
  params: { 
    genres: selectedGenre?.id, 
    platforms: selectedPlatform?.id }}, 

    [selectedGenre?.id, selectedPlatform?.id])

export default useGames;
