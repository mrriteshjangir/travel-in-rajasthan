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
    return this._userName;
  }

  // setter method : to save/set value to database
  set userName(val:string){
    this._userName = val;
  }

  /*
    Rules :- 
      1. specify , access specifier i.e. public (defult), private, protected
         private : secure , data-bind
      2. _ it use to init the variable with load of page i.e. with constuctor
      3. get : it will return value to UI
      4. set : it will set or save value from UI
      5. get method it holds return keyword
      6. set method it holds values at parameters.
      7. this keyword used to grant access permison to private variable at any function i.e. getter/setter
  */

  userEmail:string = '';
  userMob:Number = NaN;

  a:number = 10;
  b:number = 20;

  c:number = this.a + this.b;


  mg:string = '<p></p>';
  
}
