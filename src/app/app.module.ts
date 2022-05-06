import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserContainerComponent } from './features/user-container/user-container.component';
import { UserTabBarComponent } from './features/user-tab-bar/user-tab-bar.component';
import { ListViewComponent } from './features/list-view/list-view.component';
import { UserCardViewComponent } from './features/user-card-view/user-card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserTabBarComponent,
    ListViewComponent,
    UserCardViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
