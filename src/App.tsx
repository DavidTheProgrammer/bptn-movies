import React from 'react';
import {useGetPopularMoviesQuery} from "./app/api/apiSlice";

function App() {
    const {
        data: movies,
        isLoading,
        isFetching,
        error
    } = useGetPopularMoviesQuery(null);

    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    );
}

export default App;
