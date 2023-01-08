import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
    {
        path: '',
        component: MovieComponent
    },
    {
        path: 'new',
        component: NewMovieComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class MoviesRoutingModule {}
