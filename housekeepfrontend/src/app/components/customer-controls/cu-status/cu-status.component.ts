import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cu-status',
  templateUrl: './cu-status.component.html',
  styleUrls: ['./cu-status.component.css']
})
export class CuStatusComponent implements OnInit {

  
  cid:number=0;
  id!:any;


  allwork!:IAllWorkRequest[];
  constructor(private _customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='3'){
      alert("Customer not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.GetAllWorkRequestNotCompleted();
  }

  GetAllWorkRequestNotCompleted(){
    this.id=localStorage.getItem('cid') as string;
    this.cid=Number(this.id);
    this._customerService.GetAllWorkRequestNotCompleted(this.cid).subscribe(
      response=>{
        this.allwork=response;
      }
    );
  }
  key:string ='id';
  reverse:boolean =false;
  p:number = 1;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}