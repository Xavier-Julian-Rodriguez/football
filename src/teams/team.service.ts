import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Teams } from '../models/teams.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = `${environment.apiUrl}`;
  private key = `${environment.key}`;
  private host = `${environment.host}`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.key,
        'x-rapidapi-host': this.host,
      },
    };
    return this.http.get<{teams: Teams[]}>(`${this.apiUrl}/nfl-team-list`, options).pipe(map(response => response.teams));
  }
}
