import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './TeamLeader/TeamMembers/team-list/team-list.component';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { EmployeeRecordsComponent } from './TeamLeader/employeeRecord/employee-records/employee-records.component';
import {ChartModule} from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupervisorComponent } from './TeamLeader/supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    SignInComponent,
    EmployeeRecordsComponent,
    SupervisorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,ChartModule,HttpClientModule,CommonModule,FormsModule
  ],
  exports:[ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
