import type {TypedUseSelectorHook} from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'
import type {AppDispatch, RootState} from './store'
import {selectLikedMovieById} from "../features/movies/likedMoviesSlice";
import {selectMovieGenreById} from "./api/apiSlice";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useBuildImageUrl = (imageUrl: String) => `https://image.tmdb.org/t/p/w500${imageUrl}`;
export const useIsMovieLiked = (movieId: number) => {
    const movie = useAppSelector(state => selectLikedMovieById(state.likedMovies, movieId));
    return movie !== undefined;
}
export const useGetMovieGenres = (genreIds: number[]) => {
    return useAppSelector(state => {
        return genreIds.map(genreId => selectMovieGenreById(state, genreId));
    });
}