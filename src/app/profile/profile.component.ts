import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Profile from '../models/Profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile? :Profile
  profiles : Profile[] = []

  first_name : string = ''
  last_name : string = ''
  birth_date : Date = new Date()

  constructor(private profileService:ProfileService, private route:Router) { }

  fetchProfiles(){
    this.profileService.fetchAllProfiles()
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.table(result._embedded.profiles)
      this.profiles = result._embedded.profiles
    })
    .catch(error => {
      console.log("error")
      console.log(error)
    })
  }
  
  btnAddProfile(){
    this.profile={
      firstName : this.first_name,
      lastName : this.last_name,
      birthDate : this.birth_date
    }

    this.profileService.addProfile(this.profile)
    .then(response =>{
      console.log(response.status);
      if(400 == response.status){
        alert("Les information entrer est incorrect")
        return false
      }
      return response.json()
    })
    .then(result => {
      this.first_name =""
      this.last_name = ""
      this.birth_date = new Date()
      this.fetchProfiles()
    })
    .catch(error => {
      console.log("error");
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

}
