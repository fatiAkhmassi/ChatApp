import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Profile from '../models/Profile';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(profile : Profile){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "firstName": profile.firstName,
      "lastName": profile.lastName,
      "birthDate": profile.birthDate,
      "gender": profile.gender,
      "passWord": profile.password,
      "role": profile.role
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
      "firstName": userName,
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
