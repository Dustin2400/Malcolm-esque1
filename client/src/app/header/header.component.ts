import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  userId: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')) {
      this.loggedIn = true;
      this.userId = localStorage.getItem('userId');
    }
  }

  logout() {
    localStorage.removeItem('userId');
    window.location.reload();
  }
}
