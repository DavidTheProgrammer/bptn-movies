import {createEntityAdapter} from "@reduxjs/toolkit";
import {Movie} from "../../features/movies/movie";
import {Genre} from "../../features/movies/genre";

export const moviesAdapter = createEntityAdapter<Movie>();
export const moviesInitialState = moviesAdapter.getInitialState();

export const genresAdapter = createEntityAdapter<Genre>();
export const genresInitialState = genresAdapter.getInitialState();