import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllWorkRequest } from 'src/app/models/allworkrequest';
import { TechnicianService } from 'src/app/services/technician.service';


@Component({
  selector: 'app-tc-changestatus',
  templateUrl: './tc-changestatus.component.html',
  styleUrls: ['./tc-changestatus.component.css']
})
export class TcChangestatusComponent implements OnInit {

  allwork!:IAllWorkRequest[];
  tid!:number;
  id!:string;
  modalTitle="";
  wid!:number;

  service!:any;
  workstatus!:any;

  item:any;

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


  editClick(item:any){
    this.modalTitle="Choose Work Status";
    this.wid=item.wid;
    this.workstatus=item.workstatus;
    }


  updateClick(wid:any){
    var val={
    wid:this.wid,
    workstatus:this.workstatus   
    };
    this._techServices.EditWorkStatus(val).subscribe(
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
