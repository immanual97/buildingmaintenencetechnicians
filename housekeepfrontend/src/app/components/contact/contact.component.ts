import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {}
  title = 'Map View';
  lat = 10.067054476595066;
  lng = 76.3270167012746;

 
  ngOnInit(): void {
  }

}
