import { Component, OnInit } from '@angular/core';
import { entities } from 'src/app/datastructures/entities';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public data;
  constructor(private restservice:RestService,
    private router: Router) {

   }
   entities :entities[]=[]

  ngOnInit(): void {
    this.restservice.getusers().subscribe
    (
      (response)=>
      {
        this.entities=response;
        console.log(this.entities)
      },
      (error)=>
      {
        console.log("Error Occured"+error)
      }


    )

  }
  adduser()
  {
    console.log("add is working")
    this.router.navigate(['/add-user'])
  }
  deleteuser(user:entities){
    this.entities = this.entities.filter(usr => usr.id !== user.id);
    this.restservice.deleteuser(user);
  }
  edituser(userdata)
  {
    this.restservice.storedata(userdata)
    this.router.navigate(['/edit-user'])
  }
}
