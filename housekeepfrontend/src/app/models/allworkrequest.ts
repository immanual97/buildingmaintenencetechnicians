export interface IAllWorkRequest{
    wid:number;
    user:number;
    technician:number;
    service:string;
    date:string;
    accepted:string;
    workstatus:string;
    slot:string;
    cost:number;
    payed:string;
    rating:number;
}

export interface IPostWorkRequest{
    user:number;
    technician:number;
    service:string;
    date:string;
    slot:string;
    accepted:boolean;
    workstatus:string;
    cost:number;
    payed:boolean;
    rating:number;
}

export interface IRating{
    wid:number,
    rating:number
}