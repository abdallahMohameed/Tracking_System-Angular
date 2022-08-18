import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(public teamService: TeamService) {}
  x() {
    this.teamService.getAllTeams().subscribe((a) => console.log(a));
  }
  ngOnInit(): void {
    this.x();
  }
}
