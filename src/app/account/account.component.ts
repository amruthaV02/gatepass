import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  data!:any;
constructor(public httpSer:HttpService){
  this.data=JSON.parse(localStorage.getItem('userlogin')||'')

}


}
