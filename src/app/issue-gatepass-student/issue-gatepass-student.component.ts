import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-issue-gatepass-student',
  templateUrl: './issue-gatepass-student.component.html',

  styleUrls: ['./issue-gatepass-student.component.css']
})
export class IssueGatepassStudentComponent {
model:any;
  
time = {hour: 14, minute: 30};
  
time2 = {hour: 15, minute: 30};
meridian = true;

toggleMeridian() {
    this.meridian = !this.meridian;
}
}
