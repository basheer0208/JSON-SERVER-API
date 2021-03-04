import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
public data;

  constructor(private restservice: RestService,
    private router: Router
    ) {
      this.data=this.restservice.getstoreddata()

    }
onedit(modifieddata){
  this.restservice.editUser(modifieddata);

  this.router.navigate(['/display-user'])
}
  ngOnInit(): void {


  }

}
