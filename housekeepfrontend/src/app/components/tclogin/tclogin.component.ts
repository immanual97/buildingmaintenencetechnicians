import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/models/logindata';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tclogin',
  templateUrl: './tclogin.component.html',
  styleUrls: ['./tclogin.component.css']
})

export class TcloginComponent implements OnInit {

  constructor(private _techService:TechnicianService,private router:Router) { }

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

  technLogin(loginForm:NgForm){
    let loginData:ILoginData={email:(loginForm.value.email).toString(),
    password:(loginForm.value.password).toString()};
    this._techService.technicianLogin(loginData).subscribe(
      response=>{
        if (response.toString()=="Login successfully"){
          alert(response.toString());
          sessionStorage.setItem('flag','2');
          sessionStorage.setItem('userEmail',loginData.email);
          this.IdFromEmail(loginData.email);
          this.router.navigate(['technician/acceptance']);
        }
        else
        alert(response.toString());
        }
    );
  }

 
 private IdFromEmail(email:any) {
    this._techService.GetIdFromEmail(email).subscribe(
        response=>{
        this.id=response;
        localStorage.setItem('tid',this.id.toString());
      }
    );
  }
}
