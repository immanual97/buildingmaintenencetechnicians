import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCustomer,IRegisterData } from '../models/allcustomer';
import { IAllWorkRequest } from '../models/allworkrequest';
import { ILoginData } from '../models/logindata';
import { IGetPassword } from '../models/password';
import { IAllServices} from '../models/allservices';
import { AllLocations } from '../models/alllocations';
import { IAllTechnician } from '../models/alltechnician';
import { AllSlots } from '../models/allslots';
import { IPostWorkRequest } from '../models/allworkrequest';
import { IRating } from '../models/allworkrequest';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  CustomerRegister(registerData:IRegisterData){
    let dataVar=this._http.post<number>('http://127.0.0.1:8000/customerregister',registerData);
    return dataVar;
  }

  CustomerLogin(loginData:ILoginData){
    let dataVar=this._http.post<number>('http://127.0.0.1:8000/customerlogin',loginData);
    return dataVar;
  }
  VerifyPassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.post<number>('http://127.0.0.1:8000/verifycustpassword',vpassword);
    return pass;
  }
  ChangePassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.put<number>('http://127.0.0.1:8000/changecupassword',vpassword);
    return pass;
  }
  GetIdFromEmail(email:string):Observable<number>{
    let id = this._http.get<number>('http://127.0.0.1:8000/custidbyemail/'+email);
    return id;
  }
  GetAllWorkRequest(customer:number):Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetallbyusercompleted/'+customer);
    return work;
  }
  GetUserData(customer:number):Observable<IAllCustomer[]>{
    let work = this._http.get<IAllCustomer[]>('http://127.0.0.1:8000/getcustomerbyid/'+customer);
    return work;
  }
  EditCustomer(editCustomer:IAllCustomer):Observable<number>{
    let editc = this._http.put<number>('http://127.0.0.1:8000/customerupdate',editCustomer);
    return editc;
  }
  WorkRating(editRating:IRating):Observable<number>{
    let editc = this._http.put<number>('http://127.0.0.1:8000/updaterating',editRating);
    return editc;
  }

  GetAllWorkRequestNotCompleted(customer:number):Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetallbyusernotcompleted/'+customer);
    return work;
  }
  
  GetAllServices():Observable<IAllServices[]>{
    let service = this._http.get<IAllServices[]>('http://127.0.0.1:8000/getallservices');
    return service;
  }
  
  GetAllLocations():Observable<AllLocations[]>{
    let location = this._http.get<AllLocations[]>('http://127.0.0.1:8000/getalllocations');
    return location;
  }

  GetAllSlots():Observable<AllSlots[]>{
    let slots = this._http.get<AllSlots[]>('http://127.0.0.1:8000/getalllslots');
    return slots;
  }

  GetTechnicianByService(service:string):Observable<IAllTechnician[]>{
    let technician = this._http.get<IAllTechnician[]>('http://127.0.0.1:8000/getalltechniciansbyservice/'+service);
    return technician;
  }

  PostWorkRequest(workreqData:IPostWorkRequest):Observable<number>{
    let workreq = this._http.post<number>('http://127.0.0.1:8000/workrequestregister',workreqData);
    return workreq;
  }

  SearchTechnician(id:number):Observable<IAllTechnician[]>{
    let technician = this._http.get<IAllTechnician[]>('http://127.0.0.1:8000/searchtechnician/'+id);
    return technician;
  }
  
  
}
