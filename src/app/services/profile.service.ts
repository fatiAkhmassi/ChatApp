import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Profile from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  fetchAllProfiles(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json")
    if(localStorage.getItem('token')!=null){
      myHeaders.append("Authorization", localStorage.getItem('token')!);
    }    
        
    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };
    
    return fetch(environment.apiGateway + environment.apiProfiles, requestOptions)
  }

  // addProfile(profile:Profile){
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   if(localStorage.getItem('token')!=null){
  //     myHeaders.append("Authorization", localStorage.getItem('token')!);
  //   }

    // var raw = JSON.stringify({
    //   "firstName": profile.firstName,
    //   "lastName": profile.lastName,
    //   "birthDate": profile.birthDate
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    // };

  //   return fetch(environment.apiGateway+environment.apiProfiles, requestOptions)
      
  // }

  //updateProfile()
}
