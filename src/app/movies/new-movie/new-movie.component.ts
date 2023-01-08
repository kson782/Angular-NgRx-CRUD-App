import { Component } from '@angular/core';
import { Movie } from '../movie.interface';
import { createMovie } from '../store/movies.action';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent {
  constructor(private store: Store, private router: Router) {}

  movieForm: Movie = {
    id: nanoid(),
    title: '',
    year: '',
    rating: ''
  }

  ratings: string[] = ["G", "PG", "PG-13", "R"]

  onSubmit() {
    this.store.dispatch(createMovie({movie: this.movieForm}))
    this.router.navigate(['/'])
  }
}
