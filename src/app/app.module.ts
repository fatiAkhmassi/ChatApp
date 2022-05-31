import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterOutletModule } from './router-outlet.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostComponent,
    CommentaireComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterOutletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
