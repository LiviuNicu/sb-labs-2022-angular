import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  public isDisabled:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  doLogin(){
    console.log("DO LOGIN CLICKED");
    this.isDisabled=true;
  }

}
