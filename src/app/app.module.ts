import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { GatepassHistoryComponent } from './gatepass-history/gatepass-history.component';
import { IssueGatepassStudentComponent } from './issue-gatepass-student/issue-gatepass-student.component';
import { IssueGatepassVisitorComponent } from './issue-gatepass-visitor/issue-gatepass-visitor.component';
import { FutureStudentPassesComponent } from './future-student-passes/future-student-passes.component';
import { CancelStudentPassComponent } from './cancel-student-pass/cancel-student-pass.component';
import { FutureVisitorPassComponent } from './future-visitor-pass/future-visitor-pass.component';
import { ApplyGatepassComponent } from './apply-gatepass/apply-gatepass.component';
import { GatepassStatusComponent } from './gatepass-status/gatepass-status.component';
import { TodayGatepassVisitorsComponent } from './today-gatepass-visitors/today-gatepass-visitors.component';
import { TodayGatepassStudentsComponent } from './today-gatepass-students/today-gatepass-students.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { StudentGatepassAppliedHistoryComponent } from './student-gatepass-applied-history/student-gatepass-applied-history.component';
import { StudentGatepassApplicationsComponent } from './student-gatepass-applications/student-gatepass-applications.component';
import { UpdateGpassStatusComponent } from './update-gpass-status/update-gpass-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    AccountComponent,
    GatepassHistoryComponent,
    IssueGatepassStudentComponent,
    IssueGatepassVisitorComponent,
    FutureStudentPassesComponent,
    CancelStudentPassComponent,
    FutureVisitorPassComponent,
    ApplyGatepassComponent,
    GatepassStatusComponent,
    TodayGatepassVisitorsComponent,
    TodayGatepassStudentsComponent,
    HeaderComponent,
    StudentGatepassAppliedHistoryComponent,
    StudentGatepassApplicationsComponent,
    UpdateGpassStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule, 
    NgbAlertModule, FormsModule, JsonPipe,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
CUSTOM_ELEMENTS_SCHEMA  ]
})
export class AppModule { }
