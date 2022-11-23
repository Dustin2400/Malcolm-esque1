import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cancelation',
  templateUrl: './cancelation.component.html',
  styleUrls: ['./cancelation.component.css']
})
export class CancelationComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  user: any;
  comments: any;

  ngOnInit(): void {
    if (!localStorage.getItem("userId")) {
      this.router.navigate(["/"])
    }
  }

  unsubscribe() {


    var userId = localStorage.getItem('userId');
    
    var url = 'http://localhost:3002/api/users/' + userId;
    this.httpClient.get(url).subscribe(data => {
      this.user = data;
      console.log(this.user);
      
      var url2 = 'http://localhost:3002/api/users/comments/' + this.user.username;
      this.httpClient.get(url2).subscribe(data => {
        this.comments = data;
        console.log(this.comments);
        for (let i = 0; i < this.comments.length; i ++){
          var url3 = 'http://localhost:3002/api/users/comments/' + this.comments[i]._id;
          this.httpClient.delete(url3).subscribe(data => {
            console.log(data)
          })
        }
        console.log(data);
        
      });
    });
    this.httpClient.delete(url)
    .subscribe(response => {
      console.log(response);
      localStorage.removeItem('userId');
      window.location.reload();
    });
  }
}
