export interface Movie {
    id: number;
    posterPath: string;
    backdropPath: string;
    title: string;
    overview: string;
    releaseDate: string;
    adult: boolean;
    voteAverage: number;
    genreIds: Array<number>;
}