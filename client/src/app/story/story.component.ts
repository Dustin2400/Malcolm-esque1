import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { dateFormat } from '../utils/dateFormat';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: any;
  storyName: any;
  newComment: string = "";
  loggedIn: boolean = false;
  userId: any;
  isMe: boolean = false;
  comments: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.storyName = this.route.snapshot.paramMap.get('storyName');
    var url = 'http://localhost:3002/api/stories/' + this.storyName;
    this.httpClient.get(url).subscribe(data => {
      this.story = data;
      for( let i = 0; i < this.story.posts.length; i++) {
        this.story.posts[i].createdAt = dateFormat(this.story.posts[i].createdAt, 'MM-dd-yyyy');
      }
      var url2 = 'http://localhost:3002/api/stories/comments/' + this.story.title;
      this.httpClient.get(url2).subscribe(data2 => {
        this.comments = data2;
        console.log(this.comments)
      })
    })

    if(localStorage.getItem('userId')) {
      this.loggedIn = true;
      this.userId = localStorage.getItem('userId');
    }

    if (localStorage.getItem('userId')=='62e348924d52fa7420bb96bc') {
      this.isMe = true;
    }

  }

  addComment() {
    console.log(this.newComment);
    var url = 'http://localhost:3002/api/stories/comment/' + this.story.title;
    this.httpClient.post(url,
    {
      "newComment": this.newComment,
      "userId": this.userId
    })
    .subscribe(
      response => console.log(response)
    );
    window.location.reload();
  }

}
