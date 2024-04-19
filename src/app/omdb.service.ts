import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '3c2ac814';

  constructor(private http: HttpClient) { }

  getMovieByTitle(title: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('t', title);
    params = params.append('plot', 'full');

    return this.http.get(this.apiUrl, { params });
  }
}
