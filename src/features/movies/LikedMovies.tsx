import {useAppSelector} from "../../app/hooks";
import {selectLikedMovieIds} from "./likedMoviesSlice";
import {MovieListItem} from "./MovieListItem";

const LikedMovies = () => {
    const likedMovieIds = useAppSelector(state => selectLikedMovieIds(state.likedMovies)) as number[];

    if (likedMovieIds.length === 0) {
        return <LikedMoviesEmpty/>;
    }

    return (
        <div className="container h-full mx-auto">
            <h1 className="text-3xl font-medium px-8 py-4">Liked</h1>
            <div className="container flex flex-wrap justify-center py-8 pb-40">
                {likedMovieIds.map(movieId => {
                    return (
                        <div key={movieId} className="m-2">
                            <MovieListItem movieId={movieId}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default LikedMovies;

const LikedMoviesEmpty = () => {
    return (
        <div className="h-3/5">
            <div className="flex flex-col items-center text-center text-slate-300 justify-center h-full p-4 pl-8">
                <h1 className="font-medium text-3xl mb-2">
                    Your liked movies will appear here
                </h1>
                <p>
                    Go ahead and like a few to get started
                </p>
            </div>
        </div>
    );
}