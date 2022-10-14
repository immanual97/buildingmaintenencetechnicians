import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tc-changepassword',
  templateUrl: './tc-changepassword.component.html',
  styleUrls: ['./tc-changepassword.component.css']
})
export class TcChangepasswordComponent implements OnInit {



  email=sessionStorage.getItem('userEmail') as string;
  oldpassword="";
  newpassword1="";
  newpassword2="";

  constructor(private _techService:TechnicianService, private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='2'){
      alert("Technician not logged in")
      this.router.navigate(["/home"]);
    }
  }


  verify(){
    var val={
      email:this.email,
      password:this.oldpassword
    }
    this._techService.VerifyPassword(val).subscribe(
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
      this._techService.ChangePassword(val).subscribe(
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
