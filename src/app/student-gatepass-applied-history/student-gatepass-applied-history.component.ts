import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-student-gatepass-applied-history',
  templateUrl: './student-gatepass-applied-history.component.html',
  styleUrls: ['./student-gatepass-applied-history.component.css']
})
 export class StudentGatepassAppliedHistoryComponent implements OnInit {
  userid!: number;
  history: Array<{studentid:number,requesteddate:Date,starttime:string,endtime:string,duration:string,reason:string,status:string,uuid:string,createddate:Date}>=[]
  constructor(private route: Router, public httpSer: HttpService) {

  }
  async getHistory(payload: any) {
    let apply = await this.httpSer.postApiReq('gatePassGet', payload);

    for(let i=0;i<apply.data.length;i++)
    {
     
      this.history.push(apply.data[i]);
    } 
    console.log(this.history) 
  }
  ngOnInit(): void {
    if (localStorage.getItem('userlogin') == null)
      this.route.navigateByUrl('/login')
    else {
      let data = JSON.parse(localStorage.getItem('userlogin') || '')
      this.userid = data.data[0].UserId;
      let payload = {
        studentid: this.userid
      }
      this.getHistory(payload)
    }

  }
}
