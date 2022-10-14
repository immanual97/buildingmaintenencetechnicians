import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllCustomer } from '../../../models/allcustomer';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.css']
})
export class AdDashboardComponent implements OnInit {


  status!:number;
  cid :number = 1;
  fname ="";
  lname ="";
  email="";
  address="";
  modalTitle ="";
  
  editClick(item:any){
    this.modalTitle ="Edit Customer Details";
    this.cid=item.cid;
    this.fname=item.fname;
    this.lname=item.lname;
    this.email=item.email;
    this.address=item.address;
  }



  allcustomer!:IAllCustomer[];
  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('flag')!='1'){
      alert("Admin not logged in")
      this.router.navigate(["/home"]);
    }
    else
      this.Get_AllCustomer();
  }

  
  Get_AllCustomer(){
    this._adminService.GetAllCustomer().subscribe(
      response=>{
        this.allcustomer=response;
      }
    )
  }

  updateClick(cid:any){
    var val={
      cid:this.cid,
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      address:this.address
    }
    this._adminService.EditCustomer(val).subscribe(
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

  deleteClick(cid:any){
    if(confirm('Are you sure?')){
      this._adminService.DeleteCustomer(cid).subscribe(
        response=>{
          alert(response.toString())
          this.Get_AllCustomer();
        }
      )
    }
  }

  key:string ='id';
  reverse:boolean =false;
  p:number = 1;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
