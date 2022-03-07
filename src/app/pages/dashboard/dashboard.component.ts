import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users:any[]=[
    {
      id:1,
      name:"Ionel",
      email:"ionel@gmail.com"
    },
    {
      id:2,
      name:"Georgiana",
      email:"georgiana@gmail.com"
    },
    {
      id:3,
      name:"Ene",
      email:"ene@gmail.com"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  displayName(name:string){
    console.log(name);
  }

}
