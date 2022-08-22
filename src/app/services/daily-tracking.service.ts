import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DailyTraking } from '../_models/daily-traking';

@Injectable({
  providedIn: 'root'
})
export class DailyTrackingService {

  constructor(private http:HttpClient) { }
  AddDailyTracking(dailyTracking:DailyTraking) {

    return this.http.post(`${environment.commonUrl}api/dailyTrakings`, dailyTracking);
  }
updateDailyTraking(dailyTracking:DailyTraking){
  return this.http.put(`${environment.commonUrl}api/dailyTrakings/${dailyTracking.employeeID}`, dailyTracking);

}
}
