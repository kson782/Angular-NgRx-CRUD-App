import { getMovies, getMoviesSuccess, getMoviesFailure, 
    createMovie, createMovieSuccess, deleteMovie, deleteMovieSuccess } from "./movies.action";
import { Movie } from "../movie.interface";
import { MovieService } from "../movie.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, EMPTY } from "rxjs";
import { map, mergeMap, concatMap, catchError} from 'rxjs/operators'

@Injectable()
export class MovieEffects {
    constructor(private actions$: Actions, private movieService: MovieService) {}
    getMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getMovies),
            mergeMap(() => this.movieService.getMovies().pipe(
                map((movies) => getMoviesSuccess({movies: movies})),
                catchError((error) => of(getMoviesFailure({error})))
            ))
        )
    )
    createMovie$ = createEffect(() => 
        this.actions$.pipe(
            ofType(createMovie),
            concatMap((action) => this.movieService.createMovie(action.movie).pipe(
                map((newMovie) => createMovieSuccess({movie: newMovie})),
                catchError(() => EMPTY)
            ))
        )
    );

    deleteMovie$ = createEffect(() => 
        this.actions$.pipe(
            ofType(deleteMovie),
            concatMap((action) => this.movieService.deleteMovie(action.id).pipe(
                map(() => deleteMovieSuccess({id: action.id})),
                catchError(() => EMPTY)
            ))
        )
    );
}