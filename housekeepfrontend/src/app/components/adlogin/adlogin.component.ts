import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from '../../models/logindata';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {

  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  status!:number;

  validation(loginForm:NgForm){
    var email = loginForm.value.email;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
      else return false;
  }

  adminLogin(loginForm:NgForm){
    let loginData:ILoginData={email:(loginForm.value.email).toString(),
    password:(loginForm.value.password).toString()};
    this._adminService.adminLogin(loginData).subscribe(
      response=>{
        this.status=response;
        if(this.status==1)
        {
          alert("Login Success");
          sessionStorage.setItem('userEmail',loginData.email);
          sessionStorage.setItem('flag','1');
          this.router.navigate(['admin/dashboard'])
        }
        else
        if(this.status==2)
          alert("Wrong Password");
        else
          alert("User not found");
      }
    );
  }
}
