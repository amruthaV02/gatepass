import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IEmail } from '../email-interface';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  payload !: IEmail;
  constructor(private toastr: ToastrService, public httpSer: HttpService,private route:Router) {
    //console.log(this.payload)
  }
  public showError(): void {
    this.toastr.error('This E-mail Address is not registered with us', 'Authentication')

  }
  public showSuccess(): void {
    this.toastr.success('The password will be sent to your E-mail', 'Authentication');
  }
 dta!:any;
 userlogin!:any;
  async onSubmit(email: NgForm) {
    this.payload = email.value;
    console.log(this.payload);

     this.dta = await this.httpSer.postApiReq('emailCheck', this.payload);
    console.log('User Validate: ',this.dta.status);
    if (this.dta.status == "Success")
      this.showSuccess();
    else
      this.showError();

  }
ngOnInit(): void {


}
}
