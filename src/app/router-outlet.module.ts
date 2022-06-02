import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { IsSignedGuard } from './guards/is-signed.guard';

const routes: Routes=[
  {canActivate:[IsSignedGuard], path:'', component:PostComponent},
  {path:'auth/register', component :RegisterComponent},
  {path:'auth/login', component :LoginComponent},
  {canActivate:[IsSignedGuard], path:'profiles', component:ProfileComponent},
  {canActivate:[IsSignedGuard], path:'posts', component:PostComponent},
  {canActivate:[IsSignedGuard], path:'comments', component:CommentaireComponent}
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RouterOutletModule { }
