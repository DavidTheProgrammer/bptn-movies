import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {GenresResponse, PopularMoviesResponse} from "./responseTypes";
import {popularMoviesResponseTransformer} from "./responseTransformers";
import {genresAdapter, genresInitialState, moviesAdapter, moviesInitialState} from "./responseAdapters";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_TMDB_API_URL}`
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
            transformResponse(responseData: PopularMoviesResponse) {
                const movies = popularMoviesResponseTransformer(responseData);
                return moviesAdapter.setAll(moviesInitialState, movies);
            }
        }),
        getMovieGenres: builder.query({
            query: () => `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
            transformResponse(responseData: GenresResponse) {
                const genres = responseData.genres;
                return genresAdapter.setAll(genresInitialState, genres);
            }
        }),
    }),
});

export const {useGetPopularMoviesQuery, useGetMovieGenresQuery} = apiSlice;
