import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-changepassword',
  templateUrl: './ad-changepassword.component.html',
  styleUrls: ['./ad-changepassword.component.css']
})
export class AdChangepasswordComponent implements OnInit {


  email=sessionStorage.getItem('userEmail') as string;
  oldpassword="";
  newpassword1="";
  newpassword2="";

  constructor(private _adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='1'){
      alert("Admin not logged in")
      this.router.navigate(["/home"]);

    
    }
  }


  verify(){
    var val={
      email:this.email,
      password:this.oldpassword
    }
    this._adminService.VerifyPassword(val).subscribe(
      response=>{
        alert(response.toString())
        if(response.toString()=="Password Found")
            sessionStorage.setItem('verified','1');
      }
    )
  }

  verified(){
    return sessionStorage.getItem('verified');
  }

  updatepass(){
    if (this.newpassword1==this.newpassword2){
      var val={
        email:this.email,
        password:this.newpassword1
        }
      this._adminService.ChangePassword(val).subscribe(
        response=>{
          alert(response.toString())
          sessionStorage.removeItem('verified');
        }
      )
    }
    else{
      alert("Enter Same Passwords");
    }
  }

}
