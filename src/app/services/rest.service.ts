import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { entities } from '../datastructures/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }
  api_url : string = "http://localhost:3000/users";


  adduser(data){

    console.log(data)
    this.http.post(this.api_url,data).subscribe((result)=>{
      console.warn("result",result)
    })
  }

  getusers():Observable<entities[]>
  {
    return this.http.get<entities[]>(this.api_url)
  }
  deleteuser(data){

    const url=this.api_url+'/'+data.id;
    console.log(url)
    this.http.delete(url).subscribe((result) => {
      console.warn("result",result);
    })
  }

  public data;
  storedata(usr:entities){
   this.data=usr;
   console.log("$$$$$$$$$$$$$$$4",this.data)

  }
  getstoreddata():Observable<entities[]>{
    return this.data
  }
  editUser(usr: entities) {
    const url = `${this.api_url}/${usr.id}`;
    console.log(url)
    this.http.put(url,usr).subscribe((result)=>{
      console.warn("result",result)
    })
    }
  }

