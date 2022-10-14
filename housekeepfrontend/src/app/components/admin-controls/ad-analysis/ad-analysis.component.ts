import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Count } from 'src/app/models/count';

@Component({
  selector: 'app-ad-analysis',
  templateUrl: './ad-analysis.component.html',
  styleUrls: ['./ad-analysis.component.css']
})
export class AdAnalysisComponent implements OnInit {

  techcount!:Count;
  customcount!:Count;
  workcount!:Count;
  servicecount!:Count;

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this.GetTechCount();
    this.GetCustomCount();
    this.GetWorkCount();
    this.GetServiceCount();
  }

  GetTechCount(){
    this._adminService.GetTechCount().subscribe(
      response=>{
        this.techcount=response;
      }
    );
  }

  GetCustomCount(){
    this._adminService.GetTechCount().subscribe(
      response=>{
        this.customcount=response;
      }
    );
  }

  GetWorkCount(){
    this._adminService.GetWorkCount().subscribe(
      response=>{
        this.workcount=response;
      }
    );
  }

  GetServiceCount(){
    this._adminService.GetWorkCount().subscribe(
      response=>{
        this.servicecount=response;
      }
    );
  }


}
