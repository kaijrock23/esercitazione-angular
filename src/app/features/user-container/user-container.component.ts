import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { USERS } from 'src/app/models/mock.data';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  isCardView = true
  users: IUser[] = USERS;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCardView(value: boolean) {
    if (value === true) {
      this.isCardView = true;
    } else {
      this.isCardView = false;
    }
  }
  deleteuser(userid: string) {
    this.users = this.users.filter(user => user.id !== userid)
  }
}
