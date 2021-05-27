import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "post", component: PostComponent},
  {path: "contactus", component: ContactusComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
