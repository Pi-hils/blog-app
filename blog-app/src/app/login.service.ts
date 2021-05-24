import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from './login.model'
// import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  storePostInfo(blog:any){
    this.http.post("http://localhost:3000/blogs", blog).
    subscribe(result=>console.log(result),error=>console.log(error))
  }

  checkLogin():Observable<Login[]>{
    return this.http.get<Login[]>("http://localhost:3000/login");
  }


}
