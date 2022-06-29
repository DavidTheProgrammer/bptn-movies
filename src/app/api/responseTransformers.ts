import {PopularMoviesResponse} from "./responseTypes";
import {Movie} from "../../features/movies/movie";

export const popularMoviesResponseTransformer = (popularMoviesResponse: PopularMoviesResponse): Movie[] => {
    return popularMoviesResponse.results.map(popularMovie => {
        return ({
            id: popularMovie.id,
            title: popularMovie.title,
            overview: popularMovie.overview,
            adult: popularMovie.adult,
            genreIds: popularMovie.genre_ids,
            backdropPath: popularMovie.backdrop_path,
            posterPath: popularMovie.poster_path,
            releaseDate: popularMovie.release_date,
            voteAverage: popularMovie.vote_average
        })
    });
}