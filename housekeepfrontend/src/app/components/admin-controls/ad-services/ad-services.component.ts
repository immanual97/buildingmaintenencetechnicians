import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllServices } from 'src/app/models/allservices';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-services',
  templateUrl: './ad-services.component.html',
  styleUrls: ['./ad-services.component.css']
})
export class AdServicesComponent implements OnInit {
  sid :number = 0;
  service ="";

  modalTitle ="";
  
  editClick(item:any){
    this.modalTitle ="Edit Service";
    this.sid=item.sid;
    this.service=item.service;
  }

  addServiceClick(){
    this.modalTitle="Add Service";
    this.sid=0;
    this.service="";
  }



  allServices!:IAllServices[];
  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('flag')!='1'){
      alert("Admin not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllService();
  }

  
  Get_AllService(){
    this._adminService.GetAllServices().subscribe(
      response=>{
        this.allServices=response;
      }
    )
  }

  addservice(){
    var val={
      service:this.service
    }
    console.log("abcd")
    this._adminService.AddServices(val).subscribe(
      response=>{
        alert(response.toString())
        this.Get_AllService();
      }
    )
    
  }

  updateClick(sid:any){
    var val={
      sid:this.sid,
      service:this.service
      }
    this._adminService.EditServices(val).subscribe(
      response=>{
          alert(response.toString())
          this.Get_AllService();
        
      }
    )
  }

  deleteClick(sid:any){
    if(confirm('Are you sure?')){
      this._adminService.DeleteServices(sid).subscribe(
        response=>{
          alert(response.toString())
          this.Get_AllService();
        }
      )
    }
  }

  key:string ='id';
  reverse:boolean =false;
  p:number = 1;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }

}