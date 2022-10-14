import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from 'src/app/services/technician.service';
import { IAllServices } from 'src/app/models/allservices';

@Component({
  selector: 'app-tcregister',
  templateUrl: './tcregister.component.html',
  styleUrls: ['./tcregister.component.css']
})
export class TcregisterComponent implements OnInit {

  constructor(private technService:TechnicianService,private router:Router) { }
  fname="";
  lname="";
  email="";
  password="";
  password2="";
  service="";
  status=0;
  overallrating=10;
  allservices!:IAllServices[];

  service_name: string = '';


  ngOnInit(): void {

    this.GetAllServices();
  }

  validation(){
    var email = this.email;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
      else return false;
  }
  
  GetAllServices(){
    this.technService.GetAllServices().subscribe(
      response=>{
        this.allservices=response;
      }
    );
    
  }

  

  technicianregister(){
    if(this.password==this.password2){
    var val={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password,
      service:this.service_name,
      status:this.status,
      overallrating:this.overallrating,
    }
    console.log(val);
    this.technService.RegisterTechnician(val).subscribe(
      response=>{
        if (response.toString()=="Added successfully")
        {
          alert(response.toString());
          this.router.navigate(['/tclogin']);
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
