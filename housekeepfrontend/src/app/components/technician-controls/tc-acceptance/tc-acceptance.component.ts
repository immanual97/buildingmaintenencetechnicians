import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tc-acceptance',
  templateUrl: './tc-acceptance.component.html',
  styleUrls: ['./tc-acceptance.component.css']
})
export class TcAcceptanceComponent implements OnInit {

  allwork!:IAllWorkRequest[];
  tid!:number;
  id!:string;

  service!:any;

  item:any;
  accepted:boolean=true;

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
    accepted:this.accepted   
    };
    this._techServices.EditAcceptancestatus(val).subscribe(
      response=>{
        alert(response.toString());
        this.Get_AllWorkRequest();
      }
    );
  }

  rejectClick(item:any){
    var val={
      wid:item.wid,
      accepted:false   
      };
      this._techServices.EditAcceptancestatus(val).subscribe(
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
