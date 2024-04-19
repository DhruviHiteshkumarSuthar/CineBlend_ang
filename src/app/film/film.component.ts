import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent implements OnInit {
  title: string = '';
  movieDetails: any;

  constructor(private omdbService: OmdbService){}

  ngOnInit(): void {
  }

  searchMovie() {
    this.omdbService.getMovieByTitle(this.title).subscribe(
      data => {
        this.movieDetails = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

}
