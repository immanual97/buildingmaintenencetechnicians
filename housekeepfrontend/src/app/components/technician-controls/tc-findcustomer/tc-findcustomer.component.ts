import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';
import { Router } from '@angular/router';
import { IAllCustomer } from 'src/app/models/allcustomer';

@Component({
  selector: 'app-tc-findcustomer',
  templateUrl: './tc-findcustomer.component.html',
  styleUrls: ['./tc-findcustomer.component.css']
})
export class TcFindcustomerComponent implements OnInit {

  allcustomer !:IAllCustomer[];


  cid= 2;
  fname= '';
  lname= '';
  email= '';
  password= '';
  address= '';
  phone= '';


  constructor(private _techServices:TechnicianService) { }

  ngOnInit(): void {
  }


  searchcustomer(){
      this._techServices.SearchCustomer(this.cid).subscribe(
        response=>{
          this.allcustomer=response;
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
