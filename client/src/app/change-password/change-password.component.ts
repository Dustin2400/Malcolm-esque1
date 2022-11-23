import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  failed: boolean = false;
  currentPassword: string = "";
  newPassword: string = "";
  confirmPassword: string = "";
  matching: boolean = false;


  constructor() { 
  }

  ngOnInit(): void {
  }

  changePassword() {

  }
}
