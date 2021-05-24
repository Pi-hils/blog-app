import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service'
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 postRef= new FormGroup({
   title: new FormControl(),
   comment: new FormControl()
 });

  resultMessage:string=""
  blog_posts?:Array<Post> //to retrieve records one by one

  constructor( public postser: LoginService) { }

  ngOnInit(): void {
    console.log("Onit");
    this.postser.retrieveAllInfo().subscribe(result=>this.blog_posts=result);
  console.log("here")
  }

  sharePost(){
    //console.log("Post shared")
    let post = this.postRef.value;
    console.log(post);
    this.postser.storePostInfo(post).subscribe(result=>{
      // if(post != null){
      this.resultMessage="Success"
      // }else{
      //   this.resultMessage="Please fill in space"
      // }
    },error=>{
      this.resultMessage="Not stored"
    });
  }

}
