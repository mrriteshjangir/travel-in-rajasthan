import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forDiv():void{
    alert('Div clicked');
  }

  forBtn():void{
    alert('Btn clicked');
  }

  forInt(age:any){
    console.log(age);   
  }

}
