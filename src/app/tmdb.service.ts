import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ebf6b563a2f76a0c355d5c4bedacd078'; 

  constructor(private http: HttpClient) { }

  getMoviesByGenre(genreId: number, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?with_genres=${genreId}&api_key=${this.apiKey}&page=${page}`);
  }
}