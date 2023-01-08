import { Movie } from "../movie.interface";
import { createAction, props } from "@ngrx/store";

export const getMovies = createAction('[Movies] Get Movies');

export const getMoviesSuccess = createAction(
    '[Movies] Get Movies Success',
    props<{movies: Movie[]}>()
);

export const getMoviesFailure = createAction(
    '[Movies] Get Movies Failure',
    props<{error: string}>()
);

export const createMovie = createAction(
    '[Movies] Create Movie',
    props<{movie: Movie}>()
);

export const createMovieSuccess = createAction(
    '[Movies] Create Movie Success',
    props<{movie: Movie}>()
);

export const deleteMovie = createAction(
    '[Movies] Delete Movie',
    props<{id: string}>()
);

export const deleteMovieSuccess = createAction(
    '[Movies] Delete Movie Success',
    props<{id: string}>()
);