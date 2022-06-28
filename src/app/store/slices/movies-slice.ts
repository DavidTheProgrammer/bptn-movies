import {Movie} from "../../models/movie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface MoviesState {
    movies: Map<number, {
        liked: boolean,
        movie: Movie,
    }>
}

const initialState: MoviesState = {
    movies: new Map<number, { liked: boolean; movie: Movie }>(),
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        likeMovie: ({movies}, action: PayloadAction<Movie>) => {
            movies.get(action.payload.id)!.liked = true;
        },
        addMovies: ({movies}, action: PayloadAction<Array<Movie>>) => {
            action.payload.forEach(movie => {
                if (!movies.has(movie.id)) {
                    movies.set(movie.id, {liked: false, movie});
                }
            });
        }
    }
});

export const {likeMovie, addMovies} = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;

export const selectLikedMovies = (state: RootState) => {
    const likedMovies: Array<Movie> = [];
    state.movies.movies.forEach(entry => {
        if (entry.liked) {
            likedMovies.push(entry.movie);
        }
    });
    return likedMovies;
}

export default moviesSlice.reducer;
