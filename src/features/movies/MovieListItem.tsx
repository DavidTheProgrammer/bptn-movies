import {useAppDispatch, useAppSelector, useBuildImageUrl, useGetMovieGenres, useIsMovieLiked} from "../../app/hooks";
import {selectPopularMovieById} from "../../app/api/apiSlice";
import {FaExclamationTriangle, FaHeart} from "react-icons/fa";
import {Movie} from "./models/movie";
import {likeMovie, unlikeMovie} from "./likedMoviesSlice";

interface MovieListItemProps {
    movieId: number,
}

export const MovieListItem = ({movieId}: MovieListItemProps) => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector(state => selectPopularMovieById(state, movieId));
    const posterUrl = useBuildImageUrl(movie?.posterPath ?? "");
    const isMovieLiked = useIsMovieLiked(movie?.id ?? 0);
    const genres = useGetMovieGenres(movie?.genreIds ?? []);

    if (!movie) {
        return <MovieListItemError/>;
    }

    function handleLikeCLick(movie: Movie, isMovieLiked: boolean) {
        if (isMovieLiked) {
            dispatch(unlikeMovie(movie));
        } else {
            dispatch(likeMovie(movie));
        }
    }

    return (
        <div className="w-[320px] rounded shadow-md">
            <div className="relative">
                <img className="rounded" src={posterUrl} alt={`Poster for ${movie.title}`}/>
                <div className="absolute text-right top-0 right-0 left-0 py-4 pr-4 bottom-0">
                    <button className="transition-all hover:scale-110"
                            title="Add to liked movies"
                            onClick={() => handleLikeCLick(movie, isMovieLiked)}>
                        <FaHeart color={isMovieLiked ? "red" : "white"} size={40}/>
                    </button>
                </div>
            </div>
            <div className="p-2 pb-4">
                <h1 className="font-medium text-lg mb-2">{movie.title}</h1>
                <div className="p-2 pl-0">
                    Rating: {movie.voteAverage}/10 <span className="text-slate-400">({movie.voteCount})</span>
                </div>
                <div className="my-2 flex flex-wrap">
                    {
                        genres.map(genre => {
                            return (
                                <div key={genre!.id} className="p-1 px-2 rounded bg-blue-100 mr-2 mb-2">
                                    <span>{genre!.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const MovieListItemError = () => {
    return (
        <div className="rounded shadow-md w-[320px] h-[450px]">
            <div className="flex flex-col items-center text-center text-red-400 justify-center h-full p-4 pl-8">
                <h1 className="font-medium text-xl mb-2">
                    Something went wrong loading this movie
                </h1>
                <FaExclamationTriangle size={40}/>
            </div>
        </div>
    )
}