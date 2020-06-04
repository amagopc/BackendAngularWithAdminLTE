import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let body = document.getElementById('body') as HTMLBodyElement;
    if(body != undefined){
      body.classList.remove();
      body.classList.add('hold-transition','login-page')
    }
    
  }

}
