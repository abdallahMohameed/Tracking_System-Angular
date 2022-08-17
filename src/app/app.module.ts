import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './TeamLeader/TeamMembers/team-list/team-list.component';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { EmployeeRecordsComponent } from './TeamLeader/employeeRecord/employee-records/employee-records.component';
import {ChartModule} from 'primeng/chart';
@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    SignInComponent,
    EmployeeRecordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,ChartModule,
  ],
  exports:[ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
