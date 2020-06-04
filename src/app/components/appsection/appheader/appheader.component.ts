import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {
  IsLogin = false;
  Account: any;
  Personal: any;
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    this.IsLogin = this.checkStorageLogin();
  }

  checkStorageLogin(){
    let act = null;
    act = localStorage.getItem('account');
	if(act != null){
	this.Account  = JSON.parse(act);
    this.Personal = this.Account.personal;
	}
    if(act == null || act == undefined || act == ''){
      return false;
    }
    return true;
  }

  logout(){
    localStorage.removeItem('account');
    this.IsLogin = this.checkStorageLogin();
    $('.modal').removeClass('show');
    this.router.navigateByUrl('/home');
  }

  onOpenChangePassowrd(){
    $('#modal-changepassword').modal('show');
  }
}
