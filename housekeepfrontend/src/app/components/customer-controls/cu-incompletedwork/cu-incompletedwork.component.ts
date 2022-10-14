import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cu-incompletedwork',
  templateUrl: './cu-incompletedwork.component.html',
  styleUrls: ['./cu-incompletedwork.component.css']
})
export class CuIncompletedworkComponent implements OnInit {

    
  cid:number=0;
  id!:any;
  allwork!:IAllWorkRequest[];
  constructor(private _customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {

    this.Get_AllWorkRequest();
  }


  

  Get_AllWorkRequest(){
    this.id=localStorage.getItem('cid') as string;
    this.cid=Number(this.id);
    this._customerService.GetAllWorkRequestNotCompleted(this.cid).subscribe(
      response=>{
        this.allwork=response;
      }
    );
    console.log('allwork',this.allwork)
  }
  key:string ='id';
  reverse:boolean =false;
  p:number = 1;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
