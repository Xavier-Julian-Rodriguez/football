import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamComponent } from "../teams/team/team.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football';
}
