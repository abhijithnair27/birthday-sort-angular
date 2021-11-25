import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularBirthdaySorter';
  constructor( ) { }
  birthdayData: any[]=[];
  ngOnInit(): void {
   
  }
  recievedTable($event: any[]){
    this.birthdayData = $event;
    console.log(this.birthdayData);
  }


}
