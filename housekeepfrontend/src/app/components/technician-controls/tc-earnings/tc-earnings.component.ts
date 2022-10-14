import { Component, OnInit } from '@angular/core';
import { TechnicianService } from 'src/app/services/technician.service';
import { Count } from 'src/app/models/count';

@Component({
  selector: 'app-tc-earnings',
  templateUrl: './tc-earnings.component.html',
  styleUrls: ['./tc-earnings.component.css']
})
export class TcEarningsComponent implements OnInit {

  earning!:Count;
  jobscompleated!:Count;
  jobsnotstarted!:Count;
  jobsrejected!:Count;

  constructor(private _techServices:TechnicianService) { }

  ngOnInit(): void {
    this.GetErn();
    this.GetJobsCom();
    this.GetJobsNotStart();
    this.GetJobsReject();
  }

  id=localStorage.getItem('tid') as string;
  tid=Number(this.id);

  GetErn(){
    this._techServices.GetEarning(this.tid).subscribe(
      response=>{
        this.earning=response;
      }
    );
  }

  GetJobsCom(){
    this._techServices.GetJobsCompleted(this.tid).subscribe(
      response=>{
        this.jobscompleated=response;
      }
    );
  }

  GetJobsNotStart(){
    this._techServices.GetJobsnotStarted(this.tid).subscribe(
      response=>{
        this.jobsnotstarted=response;
      }
    );
  }

  GetJobsReject(){
    this._techServices.GetJobsRejected(this.tid).subscribe(
      response=>{
        this.jobsrejected=response;
      }
    );
  }

}
