import { getMovies, getMoviesSuccess, getMoviesFailure, createMovie, 
    createMovieSuccess, deleteMovie, deleteMovieSuccess } from "./movies.action";
import { Movie } from "../movie.interface";
import { createReducer, on } from "@ngrx/store";

export interface MovieState {
    movies: Movie[],
    error: string | null,
    loading: boolean
}

export const initialState: MovieState = {
    movies: [],
    error: null,
    loading: false
}

export const movieReducer = createReducer(
    initialState,
    on(getMovies, (state) => ({...state, loading: true})),
    on(getMoviesSuccess, (state, action) => ({
        ...state,
        movies: action.movies,
        error: null,
        loading: false
    })),
    on(getMoviesFailure, (state, action) => ({
        ...state,
        error: action.error,
        loading: false
    })),
    on(createMovieSuccess, (state, action) => ({
        ...state,
        movies: [...state.movies, action.movie]
    })),
    on(deleteMovieSuccess, (state, action) => ({
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
    }))
)