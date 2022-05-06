import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-tab-bar',
  templateUrl: './user-tab-bar.component.html',
  styleUrls: ['./user-tab-bar.component.css']
})
export class UserTabBarComponent implements OnInit {
  @Input() actualView = true;
  @Output() toggleCardView = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

}
