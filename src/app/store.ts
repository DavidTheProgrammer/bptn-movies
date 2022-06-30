import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api/apiSlice";
import {likedMoviesReducer} from "../features/movies/likedMoviesSlice";

export const store = configureStore({
    reducer: {
        likedMovies: likedMoviesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch