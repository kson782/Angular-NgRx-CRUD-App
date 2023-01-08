import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../movie.interface';
import { getMovies } from '../store/movies.action';
import { AppState } from 'src/app/app.state';
import {Observable} from 'rxjs';
import { selectMovies, selectError, selectLoading } from '../store/movies.selectors';
import { deleteMovie } from '../store/movies.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  movies$: Observable<Movie[]>;

  constructor (private store:Store<AppState>, private router: Router) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.movies$ = this.store.select(selectMovies);
  }
  ngOnInit(): void {
    this.store.dispatch(getMovies())
  }

  onDelete(id: string): void {
    this.store.dispatch(deleteMovie({id}))
    this.router.navigate(['/'])
  }

  navigateNew(): void {
    this.router.navigate(['/new'])
  }
}
