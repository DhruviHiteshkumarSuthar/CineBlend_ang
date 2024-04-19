import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genre_ids: number[];  
}

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit{
  genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
  ];
  selectedGenre: number | null = null;
  currentPage: number = 1;
  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {}

  onGenreSelect() {
    this.currentPage = 1;
    this.loadMovies();
  }

  loadMovies() {
    if (this.selectedGenre) {
      this.tmdbService.getMoviesByGenre(this.selectedGenre, this.currentPage).subscribe(
        (data: any) => {
          this.movies = data.results;
        },
        (error: any) => {
          console.error('Error fetching movies:', error);
        }
      );
    } else {
      this.movies = [];
    }
  }

  loadMore() {
    this.currentPage++; 
    this.loadMovies(); 
  }
}
