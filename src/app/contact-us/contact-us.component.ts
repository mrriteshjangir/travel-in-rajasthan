import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  userName = '';
  userEmail = '';

  newName(event:any):any {
    this.userName = (event.target as HTMLInputElement).value
  }

  newEmail(event:any):any {
    this.userEmail = (event.target as HTMLInputElement).value
  }

}
