import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: Router) { }
  roleid!: number;
  student!: boolean
  visitor!: boolean
  hod!: boolean
  name!: string
  title!: string
  ngOnInit(): void {
    if (localStorage.getItem('userlogin') == null)
      this.route.navigateByUrl('/login')
    else {
      let data = JSON.parse(localStorage.getItem('userlogin') || '')
      this.roleid = data.data[0].RoleId;
      this.name = data.data[0].name
      this.title = data.data[0].Role
      if (this.roleid == 1)
        this.hod = true
      else if (this.roleid == 2 || this.roleid == 4)
        this.student = true
      else if (this.roleid == 3)
        this.visitor = true;
    }

  }


}
