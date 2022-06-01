import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(user : User){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "userName": user.userName,
      "passWord": user.password,
      "role": user.role
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    return fetch(environment.apiGateway + environment.apiAuth + "/register", requestOptions)
  }

  loginUser(userName:string, passWord:string){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "userName": userName,
      "passWord": passWord
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    return fetch(environment.apiGateway + environment.apiAuth + "/login", requestOptions)
  }
}
