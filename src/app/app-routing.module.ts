import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user/add-user.component';
import { Routes, RouterModule} from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { EditUserComponent } from './components/edit-user/edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component:DisplayComponent},
  {path:'display-user' ,component:DisplayComponent },
  { path: 'add-user', component: AddUserComponent },
  {path : 'edit-user', component: EditUserComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }

