import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/models/logindata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _custService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  status!:number;
  id!:number;
  email!:string;
  tech!:number;

  validation(){
    var email = this.email;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
      else return false;
  }

  customerLogin(loginForm:NgForm){
    let loginData:ILoginData={email:(loginForm.value.email).toString(),
    password:(loginForm.value.password).toString()};
    this._custService.CustomerLogin(loginData).subscribe(
      response=>{
        if (response.toString()=="Login successfully"){
          alert(response.toString());
          sessionStorage.setItem('flag','3');
          sessionStorage.setItem('userEmail',loginData.email);
          this.IdFromEmail(loginData.email);
          this.router.navigate(['customer/changepassword']);
        }
        else
        alert(response.toString());
        }
    );
  }

 
 private IdFromEmail(email:any) {
    this._custService.GetIdFromEmail(email).subscribe(
        response=>{
        this.id=response;
        localStorage.setItem('cid',this.id.toString());
      }
    );
  }
}
