import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ManageShowtimesComponent } from './components/manage-showtimes/manage-showtimes.component';

// TODO: uncomment for movie app
// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'movies', component: MoviesComponent },
//   { path: 'movie/:id', component: MovieDetailComponent }
// ];

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'manage-showtimes', component: ManageShowtimesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
