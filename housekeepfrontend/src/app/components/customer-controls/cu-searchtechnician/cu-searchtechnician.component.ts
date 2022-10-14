import { Component, OnInit } from '@angular/core';
import { IAllTechnician } from 'src/app/models/alltechnician';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-cu-searchtechnician',
  templateUrl: './cu-searchtechnician.component.html',
  styleUrls: ['./cu-searchtechnician.component.css']
})
export class CuSearchtechnicianComponent implements OnInit {


  alltechnician !:IAllTechnician[];


  tid= 1;
  fname= '';
  lname= '';
  email= '';
  password= '';
  status= '';
  overallrating='';
  service='';
  phone= '';

  constructor(private _customerService:CustomerService) { }

  ngOnInit(): void {
  }

  searchtechnician(){
    this._customerService.SearchTechnician(this.tid).subscribe(
      response=>{
        this.alltechnician=response;
      }
    );
  }
}
