import { MovieState } from "./movies.reducer";
import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const selectFeature = (state: AppState) => state.movies

export const selectMovies = createSelector(
    selectFeature,
    (state) => state.movies
)

export const selectError = createSelector(
    selectFeature,
    (state) => state.error
)

export const selectLoading = createSelector(
    selectFeature,
    (state) => state.loading
)