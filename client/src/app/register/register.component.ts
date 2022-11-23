import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  email: string = "";
  password: string = "";
  users: any;
  originalUsername: boolean = true;
  user: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userId")) {
      this.router.navigate(["/"])
    }

    this.httpClient.get("http://localhost:3002/api/users")
    .subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }

  register() {
    this.originalUsername = true;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username == this.username) {
        this.originalUsername = false;
      }
      console.log(this.originalUsername);
    }
    if(this.originalUsername) {
      this.httpClient.post("http://localhost:3002/api/users",
      {
        "username": this.username,
        "email": this.email,
        "password": this.password
      })
      .subscribe(response => {
        this.user = response;
        console.log(this.user);
        localStorage.setItem('userId', this.user._id);
        window.location.reload();
      });
    }
  }
}
