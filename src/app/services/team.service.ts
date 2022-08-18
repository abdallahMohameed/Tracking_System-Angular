import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../_models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getAllTeams(){
    return this.http.get<Team[]>(`${environment.commonUrl}api/Teams`);
  }
}
