import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = `${environment.apiUrl}`;
  private key = `${environment.key}`;
  private host = `${environment.host}`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.key,
        'x-rapidapi-host': this.host,
      },
    };
    return this.http.get<any>(`${this.apiUrl}/nfl-team-list`, options);
  }
}
