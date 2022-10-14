import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ad-workrequest',
  templateUrl: './ad-workrequest.component.html',
  styleUrls: ['./ad-workrequest.component.css']
})
export class AdWorkrequestComponent implements OnInit {
  sid :number = 0;
  


  allwork!:IAllWorkRequest[];
  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('flag')!='1'){
      alert("Admin not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllWorkRequest();
  }

  
  Get_AllWorkRequest(){
    this._adminService.GetAllWorkRequest().subscribe(
      response=>{
        this.allwork=response;
      }
    )
  }

  key:string ='id';
  reverse:boolean =false;
  p:number = 1;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }

}