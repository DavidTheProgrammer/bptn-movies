import {createEntityAdapter} from "@reduxjs/toolkit";
import {Movie} from "../../features/movies/models/movie";
import {Genre} from "../../features/movies/models/genre";

export const popularMoviesAdapter = createEntityAdapter<Movie>();
export const popularMoviesInitialState = popularMoviesAdapter.getInitialState();

export const movieGenresAdapter = createEntityAdapter<Genre>();
export const movieGenresInitialState = movieGenresAdapter.getInitialState();