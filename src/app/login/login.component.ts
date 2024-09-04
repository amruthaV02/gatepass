import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInterface } from '../logininterface';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../services/http.service'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

  export class LoginComponent implements OnInit{
    userlog!:string;
    datal!:any;
    constructor( private toastr:ToastrService ,public httpSer: HttpService,private route:Router) {
      //console.log(this.payload)
      

    }
    ngOnInit(): void {
      if(localStorage.getItem('userlogin')==null)
      this.route.navigateByUrl('/login')

    }
    payload!: LoginInterface;
    dta!:any;
    public showSuccess():void{
      this.toastr.success('Login successful','Authentication');
console.log('hi') 
    }
    async onSubmit(login: NgForm) {
      this.payload = login.value;
      console.log(this.payload);
      this.dta = await this.httpSer.postApiReq('usersData' ,this.payload);
      localStorage.setItem('userlogin', JSON.stringify(this.dta));
 
if(this.dta.status=="Success")
{ 
this.userlog='/home'
this.datal=JSON.parse(localStorage.getItem('userlogin')||'')
if(this.datal.data[0].Token!=undefined)
    this.route.navigateByUrl('/home');
}
else{
 this.showError();     
}}
   public showError():void{
     this.toastr.error('Login Unsuccessful','Authentication')

  }
  
}