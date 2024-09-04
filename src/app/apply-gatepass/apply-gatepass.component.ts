import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-apply-gatepass',
  templateUrl: './apply-gatepass.component.html',
  styleUrls: ['./apply-gatepass.component.css']
})
export class ApplyGatepassComponent implements OnInit {
today:Date=new Date()
  payload: any;
  userid!: number;
  data!: any;
  applyVal!:any;
  regardid!:any;
  status!:number;
  constructor(private route: Router, public httpSer: HttpService) {

  }
 create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


ngOnInit(): void {
   // let data = 
    if (localStorage.getItem('userlogin')== null)
      this.route.navigateByUrl('/login')
    else {
      let dataid = JSON.parse(localStorage.getItem('userlogin')||'');
      this.userid = dataid.data[0].UserId;
    }
  }
  durValue(etime: string, dur: number): any {
    let extime: string = '';
    let index=etime.indexOf(':')
    for (let ch of etime) {
      if (ch == ':'){
        break;
      
      }
      extime = extime + ch
    }
    let num: number = parseInt(extime);
    let t = num + dur;
    let st = String(t);
    for (let i = index; i < etime.length; i++) {
      st = st + etime[i]
    }
    return st;
  }
  async onApply(apply: NgForm) {
    console.log(apply.value)
    let x = this.durValue(apply.value.exit, apply.value.dur);
    console.log(x)
    console.log('id ',this.userid);
    this.payload = {
      studentid: this.userid,
      requesteddate: apply.value.reqdate,
      starttime: apply.value.exit,
      endtime: x,
      duration: apply.value.dur,
      reason: apply.value.reason,
      status:"",
     uuid:this.create_UUID(),
      
    }
    console.log(this.payload);
    this.applyVal= await this.httpSer.postApiReq('gatePassInsert' ,this.payload);
    localStorage.setItem('applyv', JSON.stringify(this.applyVal));
    if(this.applyVal.status=='success'){
      this.route.navigateByUrl('/home');
    }
  }

}
