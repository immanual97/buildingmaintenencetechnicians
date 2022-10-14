import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllTechnician } from 'src/app/models/alltechnician';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-ad-technician',
  templateUrl: './ad-technician.component.html',
  styleUrls: ['./ad-technician.component.css']
})
export class AdTechnicianComponent implements OnInit {
  tid=1;
  fname ="";
  lname ="";
  email="";
  service="";
  status:number=1;
  overallrating:number=9;

  modalTitle ="";
  
  editClick(item:any){
    this.modalTitle ="Edit Technician Details";
    this.tid=item.tid;
    this.fname=item.fname;
    this.lname=item.lname;
    this.email=item.email;
    this.service=item.service;
    this.status=item.status;
    this.overallrating=item.overallrating;
  }



  alltechnician!:IAllTechnician[];
  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('flag')!='1'){
      alert("Admin not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllTechnician();
  }

  
  Get_AllTechnician(){
    this._adminService.GetAllTechnician().subscribe(
      response=>{
        this.alltechnician=response;
      }
    )
  }

  updateClick(tid:any){
    var val={
      tid:this.tid,
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      service:this.service,
      status:this.status,
      overallrating:this.overallrating
      }
    this._adminService.EditTechnician(val).subscribe(
      response=>{
          alert(response.toString())
          this.Get_AllTechnician();
        
      }
    )
  }

  deleteClick(tid:any){
    if(confirm('Are you sure?')){
      this._adminService.DeleteTechnician(tid).subscribe(
        response=>{
          alert(response.toString())
          this.Get_AllTechnician();
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
