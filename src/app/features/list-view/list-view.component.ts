import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { ILocation } from 'src/app/models/user.model';
import { IOrder } from 'src/app/models/user.model';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() users!: IUser[];
  @Output() deleteuser = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
