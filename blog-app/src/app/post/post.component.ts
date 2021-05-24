import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 postRef= new FormGroup({
  //id:new FormControl(),
   title: new FormControl(),
   comment: new FormControl()
 });

  constructor( public postser: LoginService) { }

  ngOnInit(): void {
  }

  sharePost(){
    //console.log("Post shared")
    let post = this.postRef.value;
    console.log(post);
    this.postser.storePostInfo(post);
  }

}
