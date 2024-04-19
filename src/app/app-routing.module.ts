import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { FilmComponent } from './film/film.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'genre', component:GenreComponent},
  {path:'film',component:FilmComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'watchlist',component:WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
