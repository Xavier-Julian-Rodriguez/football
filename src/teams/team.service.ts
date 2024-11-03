import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}
  private getTeams(name: string): Observable<Team> {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '',
        'x-rapidapi-host': '',
      },
    };
  }
}
