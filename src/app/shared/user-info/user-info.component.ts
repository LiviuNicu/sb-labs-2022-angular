import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() name:string="";
  @Output() onNameClicked: EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickName(){
    this.onNameClicked.emit(this.name);
  }

}
