import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  failed: boolean = false;
  user: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userId")) {
      this.router.navigate(["/"])
    }
  }

  login() {
      this.httpClient.post("http://localhost:3002/api/users/login",
      {
        "username": this.username,
        "password": this.password
      })
      .subscribe(
        response => {
          this.failed = false;
          this.user = response;
          console.log(response);
          console.log(this.user);
          localStorage.setItem('userId', this.user._id);
          window.location.reload();
        }, 
        error=> {this.failed = true})
      
  }
}
