import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Profile from 'src/app/models/Profile';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profile : Profile = new Profile("","",new Date(),"","","")
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  btnRegisterUser(){
    this.authService.registerUser(this.profile)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem("token",result.token)
        this.route.navigateByUrl("/auth/login")
       })
    .catch(error => console.log('error',error))
  }

}
