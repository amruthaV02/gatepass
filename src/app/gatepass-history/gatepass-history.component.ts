import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-gatepass-history',
  templateUrl: './gatepass-history.component.html',
  styleUrls: ['./gatepass-history.component.css']
})
export class GatepassHistoryComponent implements OnInit {
userid!:number;
history!:Array<any>
  constructor(private route:Router,public httpSer:HttpService){

}
async getHistory(payload:any){
let history= await this.httpSer.postApiReq('gatePassInsert' ,payload);
console.log(history)
}
 ngOnInit():void {
    if (localStorage.getItem('userlogin') == null)
    this.route.navigateByUrl('/login')
  else {
    let data = JSON.parse(localStorage.getItem('userlogin') || '')
    this.userid = data.data[0].UserId;
  //  
  let payload={
    studentid:this.userid
  }
this.getHistory(payload)
  }

}
}
