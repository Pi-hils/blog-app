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
   id: new FormControl(),
   title: new FormControl(),
   comment: new FormControl()
 });

  user?:any
  
  resultMessage:string=""
  blog_posts?:Array<Post> //to retrieve records one by one
  buttonValue:string="Store Rec"

  constructor( public postser: LoginService) { }

  ngOnInit(): void {
    if(sessionStorage != null){
      this.user = sessionStorage.getItem("userInfo")
    }

    console.log("Onit");
    this.postser.retrieveAllInfo().subscribe(result=>this.blog_posts=result);

  }
  retrievePost(){

  }

  sharePost(){
    //console.log("Post shared")
    if(this.buttonValue=="Store Rec"){

    let post = this.postRef.value;
   // console.log(post);
    this.postser.storePostInfo(post).subscribe(result=>{

      this.resultMessage="Success"
      this.postser.retrieveAllInfo().subscribe(result=>this.blog_posts=result)
      
    },error=>{
      this.resultMessage="Not stored"
    })
  }else{
    console.log("Update the record please")
    let post = this.postRef.value;
    // console.log(post);
     this.postser.updatePostInfo(post).subscribe(result=>{
 
       this.resultMessage="Post Successfully updated"
       this.postser.retrieveAllInfo().subscribe(result=>this.blog_posts=result)
       this.buttonValue="Store Rec";
     })
  }
  this.postRef.reset();
  }

  deletePost(id:any){
   this.postser.deletePostInfo(id).subscribe(result=>{
    this.postser.retrieveAllInfo().subscribe(result=>this.blog_posts=result);
  })
  }

  updatePost(post:any){
    //console.log(post);
      this.postRef.setValue(post);
      this.buttonValue="Update";

  }

}
