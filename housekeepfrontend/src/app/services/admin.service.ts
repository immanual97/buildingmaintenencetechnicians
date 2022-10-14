import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginData } from '../models/logindata';
import { IAllCustomer } from '../models/allcustomer';
import { Observable } from 'rxjs';
import { IEditCustomer } from '../models/updatecustomer';
import { IAllTechnician } from '../models/alltechnician';
import { IEditTechnician } from '../models/updatetechnician';
import { IAllServices } from '../models/allservices';
import { AddService } from '../models/addservice';
import { IAllWorkRequest } from '../models/allworkrequest';
import { IGetPassword } from '../models/password';
import { Count } from '../models/count';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  adminLogin(loginData:ILoginData):Observable<number>{
    let dataVar=this._http.post<number>('http://127.0.0.1:8000/adminlogin',loginData);
    return dataVar;
  }

  GetAllCustomer():Observable<IAllCustomer[]>{
    let cust = this._http.get<IAllCustomer[]>('http://127.0.0.1:8000/admincustomer');
    return cust;
  }

  EditCustomer(editCustomer:IEditCustomer):Observable<number>{
    let editc = this._http.put<number>('http://127.0.0.1:8000/customerupdate',editCustomer);
    return editc;
  }

  DeleteCustomer(id:number):Observable<number>{
    let deletec = this._http.delete<number>('http://127.0.0.1:8000/admincustomer/'+id);
    return deletec;
  }

  GetAllTechnician():Observable<IAllTechnician[]>{
    let tech = this._http.get<IAllTechnician[]>('http://127.0.0.1:8000/admintechnician');
    return tech;
  }

  EditTechnician(editTechnician:IEditTechnician):Observable<number>{
    let editt = this._http.put<number>('http://127.0.0.1:8000/admintechnician',editTechnician);
    return editt;
  }

  DeleteTechnician(id:number):Observable<number>{
    let deletet = this._http.delete<number>('http://127.0.0.1:8000/admintechnician/'+id);
    return deletet;
  }

  GetAllServices():Observable<IAllServices[]>{
    let serv = this._http.get<IAllServices[]>('http://127.0.0.1:8000/adminservice');
    return serv;
  }

  EditServices(editService:IAllServices):Observable<number>{
    let edits = this._http.put<number>('http://127.0.0.1:8000/adminservice',editService);
    return edits;
  }

  DeleteServices(id:number):Observable<number>{
    let deletes = this._http.delete<number>('http://127.0.0.1:8000/adminservice/'+id);
    return deletes;
  }

  AddServices(addservice:AddService):Observable<number>{
    let adservice =this._http.post<number>('http://127.0.0.1:8000/adminservice',addservice);
    return adservice;
  }

  GetAllWorkRequest():Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetall');
    return work;
  }

  VerifyPassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.post<number>('http://127.0.0.1:8000/verifyadminpassword',vpassword);
    return pass;
  }
  ChangePassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.put<number>('http://127.0.0.1:8000/changeadminpassword',vpassword);
    return pass;
  }
  GetTechCount():Observable<Count>{
    let pass = this._http.get<Count>('http://127.0.0.1:8000/gettechcount');
    return pass;
  }

  GetCustomCount():Observable<Count>{
    let pass = this._http.get<Count>('http://127.0.0.1:8000/getcustomcount');
    return pass;
  }
  
  GetWorkCount():Observable<Count>{
    let pass = this._http.get<Count>('http://127.0.0.1:8000/getworkreq');
    return pass;
  }

  GetServiceCount():Observable<Count>{
    let pass = this._http.get<Count>('http://127.0.0.1:8000/getservicecount');
    return pass;
  }


  
}
