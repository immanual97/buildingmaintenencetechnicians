import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tc-payment',
  templateUrl: './tc-payment.component.html',
  styleUrls: ['./tc-payment.component.css']
})
export class TcPaymentComponent implements OnInit {

  allwork!:IAllWorkRequest[];
  tid!:number;
  id!:string;

  service!:number;

  item:any;
  payed:boolean=true;

  constructor(private router:Router,private _techServices:TechnicianService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='2'){
      alert("Technician not logged in")
      this.router.navigate(["/home"]);
    }
    this.Get_AllWorkRequest();
  }

  Get_AllWorkRequest(){
    this.id=localStorage.getItem('tid') as string;
    this.tid=Number(this.id);
    this._techServices.GetAllWorkRequest(this.tid).subscribe(
      response=>{
        this.allwork=response;
        
      }
    );
  }

  updateClick(item:any){
    var val={
    wid:item.wid,
    payed:this.payed  
    };
    this._techServices.EditPayment(val).subscribe(
      response=>{
        alert(response.toString());
        this.Get_AllWorkRequest();
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
