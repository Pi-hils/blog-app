import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Login } from './login.model'
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  checkLogin():Observable<Login[]>{
    return this.http.get<Login[]>("http://localhost:3000/login");
  }

  storePostInfo(blog:any):Observable<Post>{
    // this.http.post("http://localhost:3000/blogs", blog). subscribe is for confirmation
    // subscribe(result=>console.log(result),error=>console.log(error))
    return this.http.post<Post>("http://localhost:3000/blogs", blog)
  }

  retrieveAllInfo(){
    return this.http.get<Post[]>("http://localhost:3000/blogs")
  }

  deletePostInfo(id:any):Observable<Post>{
    return this.http.delete<Post>("http://localhost:3000/blogs/"+id)
  }

  updatePostInfo(blog:any):Observable<Post>{
     return this.http.put<Post>("http://localhost:3000/blogs/"+blog.id,blog);
  }

}
