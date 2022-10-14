import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private custService:CustomerService,private router:Router) { }
  fname="";
  lname="";
  email="";
  password="";
  password2="";

  ngOnInit(): void {
  
  }
  validation(){
    var email = this.email;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
      else return false;
  }

  customerregister(){
    console.log('clicked');
    if(this.password==this.password2){
      var val={
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        password:this.password,
      }
      this.custService.CustomerRegister(val).subscribe(
        response=>{
          if (response.toString()=="Added successfully")
          {
            alert(response.toString());
            this.router.navigate(['/login']);
          }
          else
          alert(response.toString());
        }
      )
    }
    else{
      alert("Password mismatch");
    }
    }
  }
