import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';


@Component({
  selector: 'app-employee-records',
  templateUrl: './employee-records.component.html',
  styleUrls: ['./employee-records.component.css']
})
export class EmployeeRecordsComponent implements OnInit {
  data: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 60],
              fill: false,
              borderColor: '#42A5F5',
              // tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              // tension: .4
          }
      ]
  };


  }
  enroll(){
    document.getElementById("xk")?.click();
  }
  ngOnInit(): void {
  }

}
