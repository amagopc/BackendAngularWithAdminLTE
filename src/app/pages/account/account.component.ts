import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestfullService } from '../../services/restfull.service';

var $ = (window as unknown as any)["jQuery"];//Import jQuery

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  IsGeneralMember = false;
  Account: any;
  Personal: any;

  form = {
    password: "",
    confirmpassword: ""
  }
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
