import Genres from "../data/Genres";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: Genres, isLoading: false, error: null })

export default useGenres