import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-student-gatepass-applications',
  templateUrl: './student-gatepass-applications.component.html',
  styleUrls: ['./student-gatepass-applications.component.css']
})
export class StudentGatepassApplicationsComponent implements OnInit{
  userid!: number;
  history: Array<{studentid:number,requesteddate:Date,starttime:string,endtime:string,duration:string,reason:string,status:string,uuid:string,createddate:Date}>=[]
  stat:Array<boolean>=[]
constructor(private route:Router,public httpSer:HttpService){}
async getHistory(payload: any) {
  let apply = await this.httpSer.postApiReq('gatePassGet', payload);

  for(let i=0;i<apply.data.length;i++)
  {
   
    this.history.push(apply.data[i]);
  } 
  for(let i=0;i<this.history.length;i++)
  {
    if(this.history[i].status=="")
    this.stat.push(true)
    else
    this.stat.push(false)
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
  toUpdate(dat:Object){
    console.log('test - ',dat)
    localStorage.setItem('updatestatus',JSON.stringify(dat))
    this.route.navigateByUrl('/updatestat')
  }
  
}
