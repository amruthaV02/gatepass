import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from '../services/http.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-gpass-status',
  templateUrl: './update-gpass-status.component.html',
  styleUrls: ['./update-gpass-status.component.css']
})
export class UpdateGpassStatusComponent implements OnInit{
data!:any
studentid!:any;
requesteddate!:any
starttime!:any
endtime!:any
duration!:any
reason!:any
cdate!:any
payload!:any
regardid!:any
login!:any
  constructor(private route:Router,public httpSer:HttpService){}

ngOnInit(): void {
  if (localStorage.getItem('userlogin') == null)
  this.route.navigateByUrl('/login')
  else{
 this.data=JSON.parse(localStorage.getItem('updatestatus')||'')
 this.login=JSON.parse(localStorage.getItem('userlogin')||'')
 console.log(this.data)
 this.regardid=this.data.uuid;
  this.studentid=this.data.studentid;
  this.requesteddate=this.data.requesteddate
  this.starttime=this.data.starttime
  this.endtime=this.data.endtime
  this.duration=this.data.duration
  this.reason=this.data.reason
  this.cdate=this.data.cdate
  }
}
async onSubmit(update:NgForm){
let stat=update.value.status
console.log(stat)
this.payload={
  uuid:this.regardid,
  status:this.data.status+stat
}

let updateVal=await this.httpSer.postApiReq('gatePassUpdate' ,this.payload);
if(updateVal.status="success")
{
  this.data.status=this.payload.status
  this.route.navigateByUrl('/stdgpassapp');
}
}
}
