import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMe: boolean = false;
  stories: any;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3002/api/stories').subscribe(
      data => {
        this.stories = data;
        console.log(this.stories);
      }
    );

    if (localStorage.getItem('userId')=='62e348924d52fa7420bb96bc') {
      this.isMe = true;
    }
  }

}
