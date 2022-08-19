import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { EmployeeRecordsComponent } from './TeamLeader/employeeRecord/employee-records/employee-records.component';
import { SupervisorComponent } from './TeamLeader/supervisor/supervisor.component';
import { TeamListComponent } from './TeamLeader/TeamMembers/team-list/team-list.component';

const routes: Routes = [
  { path: 'TeamList', component: TeamListComponent },
  { path: 'EditEmployeeRecoreds/:id', component: EmployeeRecordsComponent },
  { path: 'supervisor', component: SupervisorComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
