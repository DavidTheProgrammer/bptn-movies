import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {GenresResponse, PopularMoviesResponse} from "./responseTypes";
import {popularMoviesResponseTransformer} from "./responseTransformers";
import {
    movieGenresAdapter,
    movieGenresInitialState,
    popularMoviesAdapter,
    popularMoviesInitialState
} from "./responseAdapters";
import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_TMDB_API_URL}`
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
            transformResponse(responseData: PopularMoviesResponse) {
                const movies = popularMoviesResponseTransformer(responseData);
                return popularMoviesAdapter.setAll(popularMoviesInitialState, movies);
            }
        }),
        getMovieGenres: builder.query({
            query: () => `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
            transformResponse(responseData: GenresResponse) {
                const genres = responseData.genres;
                return movieGenresAdapter.setAll(movieGenresInitialState, genres);
            }
        }),
    }),
});

// Queries
export const {useGetPopularMoviesQuery, useGetMovieGenresQuery} = apiSlice;

// Selectors
const selectPopularMoviesResult = apiSlice.endpoints.getPopularMovies.select(undefined);
const selectPopularMovies = createSelector(
    selectPopularMoviesResult,
    popularMoviesResult => popularMoviesResult.data,
);
export const {
    selectIds: selectPopularMovieIds,
    selectById: selectPopularMovieById,
} = popularMoviesAdapter.getSelectors<RootState>(state => selectPopularMovies(state) ?? popularMoviesInitialState);

const selectMovieGenresResult = apiSlice.endpoints.getMovieGenres.select(undefined);
const selectMovieGenres = createSelector(
    selectMovieGenresResult,
    movieGenresResult => movieGenresResult.data,
);
export const {
    selectById: selectMovieGenreById
} = movieGenresAdapter.getSelectors<RootState>(state => selectMovieGenres(state) ?? movieGenresInitialState);