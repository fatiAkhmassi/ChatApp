import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

const routes: Routes=[
  {path:'', component:ProfileComponent},
  {path:'auth/register', component :RegisterComponent},
  {path:'auth/login', component :LoginComponent},
  {path:'profiles', component:ProfileComponent},
  {path:'posts', component:PostComponent},
  {path:'comments', component:CommentaireComponent}
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RouterOutletModule { }
