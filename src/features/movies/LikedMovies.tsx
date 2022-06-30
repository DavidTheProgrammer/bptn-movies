import {useAppSelector} from "../../app/hooks";
import {selectLikedMovieIds} from "./likedMoviesSlice";
import {MovieListItem} from "./MovieListItem";

const LikedMovies = () => {
    const likedMovieIds = useAppSelector(state => selectLikedMovieIds(state.likedMovies)) as number[];

    return (
        <div className="container h-full mx-auto">
            <h1 className="text-3xl font-medium px-8 py-4">Liked</h1>
            <div className="container flex flex-wrap justify-center py-8 pb-40">
                {likedMovieIds.map(movieId => {
                    return (
                        <div className="m-2">
                            <MovieListItem key={movieId} movieId={movieId}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LikedMovies;