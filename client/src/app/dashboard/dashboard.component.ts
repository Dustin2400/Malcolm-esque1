import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  comments: any;
  editComment: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    var userId = this.route.snapshot.paramMap.get('userId');
    var url = 'http://localhost:3002/api/users/' + userId;
    this.httpClient.get(url).subscribe(data => {
      this.user = data;
      console.log(this.user);
      
      var url2 = 'http://localhost:3002/api/users/comments/' + this.user.username;
      this.httpClient.get(url2).subscribe(data => {
        this.comments = data;
        console.log(data);
      });
    });

  }

  edit(commentId: String) {
    for(var i = 0; i < this.comments.length; i ++) {
      if (this.comments[i]._id == commentId) {
        this.editComment = this.comments[i];
      }
    }
  }

  delete(commentId: String) {
    var url = 'http://localhost:3002/api/users/comments/' + commentId;
    this.httpClient.delete(url).subscribe(data => {
      console.log(data)
    })
    window.location.reload();
  }

  commitComment() {
    this.httpClient.put('http://localhost:3002/api/users/comments', this.editComment)
    .subscribe(data => {
      console.log(data);
    })
    window.location.reload();
  }
}
