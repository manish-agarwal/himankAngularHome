import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username="";
  password="";
  valid="";
  page0=true;
  page1=false;
  page2=false;
  page3=false;

  constructor() { }

  ngOnInit() {
  }

  validate()
  {
    if(this.username==this.password)
    {  
      this.valid="Good Morning! "+this.username;
      this.page1=true;
    }
    else  
      this.valid="Invalid username or password.";
  }

  enablepage2()
  {
    this.page2=true;
    this.page0=false;
    this.page1=false;
  }

  enablepage3()
  {
    this.page3=true;
    this.page2=false;
  }
}
