import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() {  }
  
  ngOnInit(): void { }

  private _userName:string = '';

  // getter method : to get value from database
  get userName():string{
    return this.userName;
  }

  // setter method : to save/set value to database
  set userName(val:string){
    this.userName = val;
  }

  userEmail:string = '';
  userMob:Number = NaN;

}
