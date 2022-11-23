import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Content } from '../model/Content';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  story: any;
  storyName: any;
  isMe: boolean= false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('userId')=='62e348924d52fa7420bb96bc') {
      this.isMe = true;
    }

    this.storyName = this.route.snapshot.paramMap.get('storyName');
    var url = 'http://localhost:3002/api/stories/' + this.storyName;
    this.httpClient.get(url).subscribe(data => {
      this.story = data;
    })
  }

  editStory() {
    console.log(this.story);
    var url = "http://localhost:3002/api/stories/" + this.story._id;
    this.httpClient.put(url, this.story)
    .subscribe(response => console.log(response));
  }

  addContent() {
    var newContent = new Content("", "", "");
    this.story.contents.push(newContent);
  }
}
