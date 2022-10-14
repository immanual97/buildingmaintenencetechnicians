import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cu-changepassword',
  templateUrl: './cu-changepassword.component.html',
  styleUrls: ['./cu-changepassword.component.css']
})
export class CuChangepasswordComponent implements OnInit {

  email=sessionStorage.getItem('userEmail') as string;
  oldpassword="";
  newpassword1="";
  newpassword2="";

  constructor(private _customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='3'){
      alert("Customer not logged in")
      this.router.navigate(["/home"]);
    }
  }


  verify(){
    var val={
      email:this.email,
      password:this.oldpassword
    }
    this._customerService.VerifyPassword(val).subscribe(
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
      this._customerService.ChangePassword(val).subscribe(
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
