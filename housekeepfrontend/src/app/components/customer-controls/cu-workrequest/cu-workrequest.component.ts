import { Component, OnInit } from '@angular/core';
import { AllLocations } from 'src/app/models/alllocations';
import { CustomerService } from 'src/app/services/customer.service';
import { IAllServices } from '../../../models/allservices';
import { IAllTechnician } from 'src/app/models/alltechnician';
import { AllSlots } from 'src/app/models/allslots';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cu-workrequest',
  templateUrl: './cu-workrequest.component.html',
  styleUrls: ['./cu-workrequest.component.css']
})
export class CuWorkrequestComponent implements OnInit {

 

  allservices!:IAllServices[];
  alllocations!:AllLocations[];
  alltechnicians!:IAllTechnician[];
  allslots!:AllSlots[];

  service_name: string = '';
  currentDate: string;
  slot_name: string = '';
  book_date: string = '';


  user =  0;
  technician = 0;
  service!:any;
  date ='';
  slot= '';
  accepted = false;
  workstatus = '';
  cost = 0;
  payed =false;
  rating = 0;

  constructor(private _allservices:CustomerService) {
    this.currentDate = new Date().toISOString().slice(0, 10);
   }
  
  ngOnInit(): void {
    this.GetAllServices();
    this.GetAllLocations();
    this.GetAllSlots();
    
  }

  GetAllServices(){
    this._allservices.GetAllServices().subscribe(
      response=>{
        this.allservices=response;
      }
    );
  }

  GetAllLocations(){
    this._allservices.GetAllLocations().subscribe(
      response=>{
        this.alllocations=response;
      }
    );
  }

  GetAllSlots(){
    this._allservices.GetAllSlots().subscribe(
      response=>{
        this.allslots=response;
      }
    );
  }

  GetTechnicianByService(){
    this.service=this.service_name;
    this._allservices.GetTechnicianByService(this.service).subscribe(
      response=>{
        this.alltechnicians=response;
      }
    );
  }



  bookClick(tid:any){
    this.technician = tid;
    this.service=this.service_name;
    this.date =this.book_date;
    this.slot= this.slot_name;
    this.accepted = false;
    this.workstatus = 'Not Started';
    this.cost = 0;
    this.payed =false;
    this.rating = 0;

    console.log(this.user);
    console.log(this.technician);
    console.log(this.service);
    console.log(this.date);
    console.log(this.slot);
    console.log(this.accepted);
    console.log(this.workstatus);
    console.log(this.cost);
    console.log(this.payed);
    console.log(this.rating);
  }

  bookWork(){
   let user_id = Number(localStorage.getItem('cid'));
   console.log('cid',user_id);
var val={
  user : user_id,
  technician : this.technician,
  service:this.service_name,
  date :this.book_date,
  slot: this.slot_name,
  accepted : false,
  workstatus : 'Not Started',
  cost : 0,
  payed :false,
  rating : 0,
}

this._allservices.PostWorkRequest(val).subscribe(
  response=>{
    if (response.toString()=="Added successfully")
    {
      alert(("Booking Successful"));
    }
    else
    alert(response.toString());
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

