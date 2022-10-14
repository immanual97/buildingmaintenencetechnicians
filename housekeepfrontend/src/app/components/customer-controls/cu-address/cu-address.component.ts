import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllCustomer } from 'src/app/models/allcustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cu-address',
  templateUrl: './cu-address.component.html',
  styleUrls: ['./cu-address.component.css']
})
export class CuAddressComponent implements OnInit {

  status!:number;
  password!:any;
  id!:any;
  cid :number = 1;
  fname ="";
  lname ="";
  email="";
  address="";
  phone="";
  modalTitle ="";
  
  editClick(item:any){
    this.modalTitle ="Edit Customer Details";
    this.cid=item.cid;
    this.fname=item.fname;
    this.lname=item.lname;
    this.email=item.email;
    this.address=item.address;
    this.phone=item.phone;
  }



  user!:IAllCustomer[];
  constructor(private _custService:CustomerService,private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('flag')!='3'){
      alert("Customer not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllCustomer();
  }

  validation(){
    var phone = this.phone;
    if(/^[0-9\-\+]{9,10}$/.test(phone))
      return true;
      else return false;
  }
  
  
  Get_AllCustomer(){
    this.id=localStorage.getItem('cid') as string;
    this.cid=Number(this.id);
    this._custService.GetUserData(this.cid).subscribe(
      response=>{
        this.user=response;
      }
    )
  }

  updateClick(cid:any){
    var val={
      cid:this.cid,
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password,
      address:this.address,
      phone:this.phone
    }
    this._custService.EditCustomer(val).subscribe(
      response=>{
        this.status=response;
        if(this.status==1)
        {
          alert("Updated Successfully")
          this.Get_AllCustomer();
        }
        else
          alert("Cannot Update")
          this.Get_AllCustomer();
        
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
