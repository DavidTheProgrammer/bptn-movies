import {Genre} from "./genre";

export interface Movie {
    id: number;
    posterPath: string;
    backdropPath: string;
    title: string;
    overview: string;
    releaseDate: Date;
    adult: boolean;
    voteAverage: number;
    genres: Array<Genre>;
}