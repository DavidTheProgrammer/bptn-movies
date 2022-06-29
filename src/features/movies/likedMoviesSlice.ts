import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "./models/movie";

const likedMoviesAdapter = createEntityAdapter<Movie>();
const likedMoviesInitialState = likedMoviesAdapter.getInitialState();

export const likedMoviesSlice = createSlice({
    name: 'likedMovies',
    initialState: likedMoviesInitialState,
    reducers: {
        likeMovie: (state, action: PayloadAction<Movie>) => {
            if (!state.entities[action.payload.id]) {
                likedMoviesAdapter.addOne(state, action.payload);
            }
        },
        unlikeMovie: (state, action: PayloadAction<Movie>) => {
            if (state.entities[action.payload.id]) {
                likedMoviesAdapter.removeOne(state, action.payload.id);
            }
        }
    }
});

// Actions
export const {likeMovie, unlikeMovie} = likedMoviesSlice.actions;

// Selectors
export const {selectEntities, selectById} = likedMoviesAdapter.getSelectors();