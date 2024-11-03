import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { async, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgIf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {

  data:string[] = [];
  error:string = "";


  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

}
