import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cu-history',
  templateUrl: './cu-history.component.html',
  styleUrls: ['./cu-history.component.css']
})
export class CuHistoryComponent implements OnInit {
  
  
  cid:number=0;
  wid:number=0;
  id!:any;
  modalTitle="";
  rating:number=0;

  ratingClick(item:any){
    this.modalTitle="Give rating in 10";
    this.wid=item.wid;
    this.rating=item.rating;
  }


  allwork!:IAllWorkRequest[];
  constructor(private _customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='3'){
      alert("Customer not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllWorkRequest();
  }

  Get_AllWorkRequest(){
    this.id=localStorage.getItem('cid') as string;
    this.cid=Number(this.id);
    this._customerService.GetAllWorkRequest(this.cid).subscribe(
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

  
  updateClick(){
    var val={
      wid:this.wid,
      rating:this.rating
      
    }
    this._customerService.WorkRating(val).subscribe(
      response=>{
        if(response.toString()=="Update successfully")
        {
          alert("Updated Successfully")
          this.Get_AllWorkRequest();
        }
        else
          alert("Cannot Update")
          this.Get_AllWorkRequest();
        
      }
    )
  }




}