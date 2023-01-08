import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:5000/movies')
  }

  createMovie(movie: Movie) {
    return this.http.post<Movie>('http://localhost:5000/movies', movie)
  }

  deleteMovie(id: string) {
    return this.http.delete<Movie>(`http://localhost:5000/movies/${id}`)
  }
}
