import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeMonths } from '../_models/employee-months';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMonthService {

  constructor(private http:HttpClient) { }

  getEmpMonthByEmpId(id:number,date:string){
    return this.http.get<EmployeeMonths>(`${environment.commonUrl}api/EmployeeMonths/empMonth?id=${id}&date=${date}`);
  }
}
