import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/_models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(public teamService: TeamService,private router:Router) {}

   monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  team:Team =new Team(0,"",0,null);
  public teamId:number=Number(localStorage.getItem("teamId"))
date = new Date()

  ngOnInit(): void {
    this.getTeam();
    console.log(this.monthNames[this.date.getMonth()])
    console.log(this.date.getFullYear())
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/")
  }

  getTeam(){
    this.teamService.getTeamById(this.teamId).subscribe(a=>{
      this.team=a;
    })
  }
}
