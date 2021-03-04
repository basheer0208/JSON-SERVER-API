import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './components/add-user/add-user/add-user.component';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './services/rest.service';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
