import { Component, ContentChild, OnInit } from '@angular/core';
import { Content } from '../model/Content';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  isMe: boolean= false;
  title: string = "";
  subtitle: string = "";
  name: string ="";
  contents: Array<Content> = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    if (localStorage.getItem('userId')=='62e348924d52fa7420bb96bc') {
      this.isMe = true;
    }
  }

  addStory() {
    var newStory = {
      "title": this.title,
      "subtitle": this.subtitle,
      "name": this.name,
      "contents": this.contents
    };
    this.httpClient.post("http://localhost:3002/api/stories", newStory)
    .subscribe(response => console.log(response));
  }
  
  addContent() {
    var newContent = new Content("", "", "");
    this.contents.push(newContent);
  }
}
