import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { DailyTrackingService } from 'src/app/services/daily-tracking.service';
import { EmployeeMonthService } from 'src/app/services/employee-month.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DailyTraking } from 'src/app/_models/daily-traking';
import { EmployeeMonths } from 'src/app/_models/employee-months';

@Component({
  selector: 'app-employee-records',
  templateUrl: './employee-records.component.html',
  styleUrls: ['./employee-records.component.css'],
})
export class EmployeeRecordsComponent implements OnInit {
  data: any;
  employeeId = 0;
  empname = '';
  empMonth: EmployeeMonths = new EmployeeMonths(0, 0, 0, '', '');

  constructor(
    public ar: ActivatedRoute,
    public empService: EmployeeService,
    private empMonthService: EmployeeMonthService,
    private DailyTrackingService: DailyTrackingService
  ) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'present',
          data: [65, 59, 80, 81, 56, 55, 60],
          fill: false,
          borderColor: '#42A5F5',
          // tension: .4
        },
        {
          label: 'late',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          // tension: .4
        },
      ],
    };
  }
  enroll() {
    document.getElementById('xk')?.click();
  }
  ngOnInit(): void {
    this.ar.params.subscribe((p) => {
      this.employeeId = Number(p['id']);
    });
    this.getEmp();
    this.getEmpMonth();
  }
  getEmp() {
    this.empService.getEmployeeById(this.employeeId).subscribe((a) => {
      this.empname = a.name;
    });
  }

  getEmpMonth() {
    this.empMonthService
      .getEmpMonthByEmpId(this.employeeId, this.thisMonth)
      .subscribe((a) => (this.empMonth = a));
  }
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
  date = new Date();
  today = this.date.toISOString().slice(0, 10);
  thisMonth =
    this.monthNames[this.date.getMonth()] + ' ' + this.date.getFullYear();
  //////////////////////////////////////////////////////////upDate Records////////////////////////
  dailyUpdate = new DailyTraking('', 0, '');
  updateDate() {
    var dateInput = document.getElementById('form3') as HTMLInputElement;
    var datee = new Date(dateInput.value);
    this.dailyUpdate.date =
      datee.getDate() +
      ' ' +
      this.monthNames[datee.getMonth()] +
      ' ' +
      datee.getFullYear();
  }
  UpdateStatus() {
    var DropDown = document.getElementById('select') as HTMLSelectElement;
    var Index = DropDown.selectedIndex;
    var SelectedValue = DropDown.options[Index].value;
    this.dailyUpdate.employeeID = this.employeeId;
    this.dailyUpdate.status = SelectedValue;
    console.log(this.dailyUpdate);
  }
  CommitUpdate() {
    this.DailyTrackingService.updateDailyTraking(this.dailyUpdate).subscribe(
      (a) => {
        console.log(a);
        alert("Record Updated")
        
      },
      (er) => alert(er)
    );
  }
}
