import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movies.effects';
import { movieReducer } from './store/movies.reducer';
import { MoviesRoutingModule } from './movies-routing.module';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieComponent,
    NewMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule { }
