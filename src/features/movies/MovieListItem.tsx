import {useAppSelector, useBuildImageUrl, useIsMovieLiked} from "../../app/hooks";
import {selectPopularMovieById} from "../../app/api/apiSlice";

import {FaHeart} from 'react-icons/fa';

type MovieListItemProps = {
    movieId: number,
}

export const MovieListItem = ({movieId}: MovieListItemProps) => {
    const movie = useAppSelector(state => selectPopularMovieById(state, movieId));
    const posterUrl = useBuildImageUrl(movie?.posterPath ?? "");
    const isMovieLiked = useIsMovieLiked(movie?.id ?? 0);

    if (!movie) {
        return <MovieListItemError/>;
    }

    return (
        <div className="transition-all cursor-pointer max-w-[320px] rounded shadow-md hover:shadow-xl hover:scale-105">
            <div className="relative">
                <img className="rounded" src={posterUrl} alt={`Poster for ${movie.title}`}/>
                <div className="absolute text-right top-0 right-0 left-0 py-4 pr-4 bottom-0">
                    <button className="hover:scale-105">
                        <FaHeart color={isMovieLiked ? "red" : "white"} size={40}/>
                    </button>
                </div>
            </div>
            <div className="p-2">
                <h1 className="font-medium text-lg mb-2">{movie.title}</h1>
            </div>
        </div>
    );
}

const MovieListItemError = () => {
    return (
        <div className="rounded shadow-md w-[320px] h-[450px]">
            <div className="flex items-center text-center text-red-400 justify-center h-full p-4 pl-8">
                <h1 className="font-medium text-xl mb-2">
                    Something went wrong loading this movie
                </h1>
            </div>
        </div>
    )
}