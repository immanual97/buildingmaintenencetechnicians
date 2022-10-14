import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  loggedin(){
    return sessionStorage.getItem('userEmail');
  }

  dashboard(){
    
    var flag =sessionStorage.getItem('flag');
    if(flag =='1')
      this.router.navigate(['admin/dashboard']);
    if(flag=='2')
      this.router.navigate(['technician/acceptance']);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['home']);
  }

}
