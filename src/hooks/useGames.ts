import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) => useData<Games>('/games', { 
  params: { 
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id }}, 

    [gameQuery])

export default useGames;
