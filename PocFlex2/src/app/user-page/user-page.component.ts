import { Component, OnInit } from '@angular/core';
import { User } from '../models/interfaces/User.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user = new User;

  constructor() { }

  ngOnInit() {
  }

  log(user: User) {
    console.log(user)
  }

}
