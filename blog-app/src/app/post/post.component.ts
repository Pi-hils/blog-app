import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 postRef= new FormGroup({
   title:new FormControl(),
   post: new FormControl()
 });

  constructor() { }

  ngOnInit(): void {
  }

  sharePost(){
    console.log("Post shared")
  }

}
