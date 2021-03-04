import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private restservice: RestService,
    private router: Router ) { }
  onSubmit(data)
  {
    console.log("data is displaying",data)
    this.restservice.adduser(data);
    this.router.navigate(['/display-user'])
  }
  ngOnInit(): void {
  }

}
