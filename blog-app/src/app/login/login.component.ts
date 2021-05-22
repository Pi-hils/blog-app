import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginRef = new FormGroup({
   user: new FormControl(),
   pass: new FormControl()
 });

 result?:string="";

  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }
   checkLoginDetails(){
      let login = this.loginRef.value;
      console.log(login);
      let info = 0;

      this.ls.checkLogin().subscribe(result=>{
        result.forEach(res=>{
          if(res.user==login.user && res.pass==login.pass){
            info++
          }
        })
        if(info>0){
          this.result="Successfully Logged In"
        }else{
          this.result="failure, please try again"
        }
      }, error=>{

      })
      
    }

}
