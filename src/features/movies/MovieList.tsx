import {MovieListItem} from "./MovieListItem";

interface MovieListProps {
    movieIds: number[]
}

const MovieList = ({movieIds}: MovieListProps) => {
    return (
        <div className="container flex flex-wrap justify-center py-8 pb-40">
            {movieIds.map(movieId => {
                return (
                    <div key={movieId} className="m-2">
                        <MovieListItem movieId={movieId}/>
                    </div>
                );
            })}
        </div>
    );
}

export default MovieList;