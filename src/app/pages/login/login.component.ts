import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {
    email:'test@test.com',
    password:''
  }
  public error: boolean | string = false;

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(){
    this.error=false;
    if(this.user.email && this.user.password){
        if(this.validateEmail(this.user.email)){
            // apelam API-ul de login
        }else{
          this.error="Email is invalid";
        }
    }
  }

  validateEmail(email:string){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

}
