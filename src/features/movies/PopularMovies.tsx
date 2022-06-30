import {RingLoader} from "react-spinners";
import {useGetPopularMoviesQuery} from "../../app/api/apiSlice";
import {Movie} from "./models/movie";
import {MovieListItem} from "./MovieListItem";

const PopularMovies = () => {
    //
    const {
        data: movies,
        error,
        isLoading,
    } = useGetPopularMoviesQuery(undefined);

    let component = <PopularMoviesLoading/>;
    // if (error) {
    //
    // }

    const movie: Movie = {
        "adult": false,
        "backdropPath": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
        "genreIds": [
            14,
            28,
            12
        ],
        "id": 453395,
        "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        "posterPath": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        "releaseDate": "2022-05-04",
        "title": "Doctor Strange in the Multiverse of Madness",
        "voteAverage": 7.5,
        "voteCount": 3659
    }

    return (
        <div className="container h-full mx-auto">
            <h1 className="text-3xl font-medium py-4">Popular</h1>
            {/*{component}*/}
            <MovieListItem movieId={movie.id}/>
        </div>
    );
}

const PopularMoviesLoading = () => {
    return (
        <div className="w-full h-2/3 flex flex-col items-center justify-center">
            <span className="mb-8 text-lg font-medium">Loading...</span>
            <RingLoader/>
        </div>
    );
}

export default PopularMovies;