import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {apiSlice} from "./app/api/apiSlice";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LikedMovies from "./features/movies/LikedMovies";
import PopularMovies from "./features/movies/PopularMovies";

// Get all genres for movies on app initialisation
store.dispatch(apiSlice.endpoints.getMovieGenres.initiate(undefined));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route index element={<PopularMovies/>}/>
                        <Route path="liked" element={<LikedMovies/>}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
