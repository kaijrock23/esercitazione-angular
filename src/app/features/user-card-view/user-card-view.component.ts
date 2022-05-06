import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { ILocation } from 'src/app/models/user.model';
import { IOrder } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-card-view',
  templateUrl: './user-card-view.component.html',
  styleUrls: ['./user-card-view.component.css']
})
export class UserCardViewComponent implements OnInit {
  @Input() user!: IUser;
  @Output() edituser = new EventEmitter<string>()
  @Output() deleteuser = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
