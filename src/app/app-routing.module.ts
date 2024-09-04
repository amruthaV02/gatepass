import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountComponent } from './account/account.component';
import { IssueGatepassStudentComponent } from './issue-gatepass-student/issue-gatepass-student.component';
import { ApplyGatepassComponent } from './apply-gatepass/apply-gatepass.component';
import { GatepassHistoryComponent } from './gatepass-history/gatepass-history.component';
import { StudentGatepassAppliedHistoryComponent } from './student-gatepass-applied-history/student-gatepass-applied-history.component';
import { StudentGatepassApplicationsComponent } from './student-gatepass-applications/student-gatepass-applications.component';
import { UpdateGpassStatusComponent } from './update-gpass-status/update-gpass-status.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:DashboardComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'account',component:AccountComponent},
  {path:'issuestdpass',component:IssueGatepassStudentComponent},
  {path:'applygpass',component:ApplyGatepassComponent},
  {path:'stdgpassaphistory',component:StudentGatepassAppliedHistoryComponent},
  {path:'stdgpassapp',component:StudentGatepassApplicationsComponent},
  {path:'updatestat',component:UpdateGpassStatusComponent},
  {path:'updatestat',component:UpdateGpassStatusComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
