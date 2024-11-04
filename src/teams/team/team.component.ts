import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { async, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Teams } from '../../models/teams.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgIf, NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {
  data: any[] = [];
  error: string = '';
  teams: Teams[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data: Teams[]) => {
      this.teams = data;
      console.log('Teams Data: ', this.teams);

    }),
      (error: any) => {
        console.error('Error loading data: ', error);
      };
  }
}
