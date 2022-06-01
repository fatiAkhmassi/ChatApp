import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string = ""
  passWord : string = ""  
  constructor(private authService:AuthService, private route:Router) { }

  btnLoginUser(){
    this.authService.loginUser(this.userName, this.passWord)
      .then(response => {
          console.log(response.status);
          if (400 == response.status) {
            alert("email or password not correct")
            return false
          }
          return response.json()
      })
      .then(result => {
        (result) ? localStorage.setItem("token",result.token) : ""
        this.userName=""
        this.passWord=""
        this.route.navigateByUrl("/")
      })
      .catch(error => {
        console.log("error");
        console.log(error)
      })
  }
  
  ngOnInit(): void {
  }

}
