import {createEntityAdapter} from "@reduxjs/toolkit";
import {Movie} from "../../features/movies/models/movie";
import {Genre} from "../../features/movies/models/genre";

export const moviesAdapter = createEntityAdapter<Movie>();
export const moviesInitialState = moviesAdapter.getInitialState();

export const genresAdapter = createEntityAdapter<Genre>();
export const genresInitialState = genresAdapter.getInitialState();