import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DailyTrackingService } from 'src/app/services/daily-tracking.service';
import { TeamService } from 'src/app/services/team.service';
import { DailyTraking } from 'src/app/_models/daily-traking';
import { Team } from 'src/app/_models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  constructor(
    public teamService: TeamService,
    private router: Router,
    private DailytrackingService: DailyTrackingService
  ) {}

  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  team: Team = new Team(0, '', 0, null);
  public teamId: number = Number(localStorage.getItem('teamId'));
  date = new Date();

  ngOnInit(): void {
    this.getTeam();
    console.log(this.monthNames[this.date.getMonth()]);
    console.log(this.date.getFullYear());
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  getTeam() {
    this.teamService.getTeamById(this.teamId).subscribe((a) => {
      this.team = a;
    });
  }

  visbile(id: any) {
    document.getElementById(id)?.classList.remove('invisible');
  }

  dailyTracking: DailyTraking = new DailyTraking( null,0, '');
  dailyRec(id: any, empId: number) {
    let ID = 'drop' + id;
    var DropDown = document.getElementById(ID) as HTMLSelectElement;
    var Index = DropDown.selectedIndex;
    var SelectedValue = DropDown.options[Index].value;
    this.dailyTracking.employeeID = empId;
    this.dailyTracking.status = SelectedValue;
    this.DailytrackingService.AddDailyTracking(this.dailyTracking).subscribe(
      () => {
        alert("Submitted")
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
