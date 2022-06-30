import {RingLoader} from "react-spinners";
import {selectPopularMovieIds, useGetPopularMoviesQuery} from "../../app/api/apiSlice";
import {useAppSelector} from "../../app/hooks";
import MovieList from "./MovieList";

const PopularMovies = () => {
    const {isSuccess, isError} = useGetPopularMoviesQuery(undefined);
    const popularMovieIds = useAppSelector(state => selectPopularMovieIds(state)) as number[];

    let component;
    if (isError) {
        // Should show error
    } else if (isSuccess) {
        component = <MovieList movieIds={popularMovieIds}/>
    } else {
        component = <PopularMoviesLoading/>
    }

    return (
        <div className="container h-full mx-auto">
            <h1 className="text-3xl font-medium px-8 py-4">Popular</h1>
            {component}
        </div>
    );
}
export default PopularMovies;

const PopularMoviesLoading = () => {
    return (
        <div className="w-full h-2/3 flex flex-col items-center justify-center">
            <span className="mb-8 text-lg font-medium">Loading...</span>
            <RingLoader/>
        </div>
    );
}

