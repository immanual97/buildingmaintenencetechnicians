import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tc-addprice',
  templateUrl: './tc-addprice.component.html',
  styleUrls: ['./tc-addprice.component.css']
})
export class TcAddpriceComponent implements OnInit {

  allwork!:IAllWorkRequest[];
  tid!:number;
  id!:string;

  modalTitle="";
  wid!:number;
  cost!:number;
  item:any;
  

  constructor(private router:Router,private _techServices:TechnicianService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('flag')!='2'){
      alert("Technician not logged in")
      this.router.navigate(["/home"]);
    }
    this.Get_AllWorkRequest();
  }


  editClick(item:any){
  this.modalTitle="Add Price";
  this.wid=item.wid;
  this.cost=item.cost;
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

  updateClick(wid:any){
    var val={
    wid:this.wid,
    cost:this.cost  
    };
    this._techServices.EditPrice(val).subscribe(
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
