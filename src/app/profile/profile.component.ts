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

  id:number=0
  first_name : string = ''
  last_name : string = ''
  birth_date : Date = new Date()
  gender : string =""
  role : string = ""

  constructor(private profileService:ProfileService, private route:Router) { }

  fetchProfiles(){
    this.profileService.fetchAllProfiles()
    .then(response => {
        return response.json()
    })
    .then(result => {
      console.log(result)
      console.table(result)
      this.profiles = result
    })
    .catch(error => {
      console.log("error");
      console.log(error);      
    })
  }
  

  updateProfile(pro : Profile){
    this.id=pro.id
    this.first_name =pro.firstName
    this.last_name = pro.lastName
    this.birth_date = pro.birthDate
    this.gender=pro.gender
    this.role=pro.role
  }

  deleteProfile(id : number){
    this.profileService.deleteProfile(id)
    .then(response =>{
      console.log(response.status);
      if(400 == response.status){
        alert("L'id entrer est incorrect")
        return false
      }
      return response.json()
    })
    .then(result => { 
      this.fetchProfiles()
    })
    .catch(error => {
      console.log("error");
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.fetchProfiles()
  }

  valideModifications(){
    this.profile={
      id:this.id,
      firstName : this.first_name,
      lastName : this.last_name,
      birthDate : this.birth_date,
      gender:this.gender,
      password:"",
      role:this.role    
    }

    this.profileService.updateProfile(this.profile)
    .then(response =>{
      console.log(response.status);
      if(400 == response.status){
        alert("Les information entrer est incorrect")
        return false
      }
      return response.json()
    })
    .then(result => {
      this.id=0
      this.first_name =""
      this.last_name = ""
      this.birth_date = new Date()
      this.gender=""
      this.role=""

      this.fetchProfiles()
    })
    .catch(error => {
      console.log("error");
      console.log(error)
    })
  }






















  
  // btnAddProfile(){
  //   this.profile={
  //     firstName : this.first_name,
  //     lastName : this.last_name,
  //     birthDate : this.birth_date
  //   }

  //   this.profileService.addProfile(this.profile)
  //   .then(response =>{
  //     console.log(response.status);
  //     if(400 == response.status){
  //       alert("Les information entrer est incorrect")
  //       return false
  //     }
  //     return response.json()
  //   })
  //   .then(result => {
  //     this.first_name =""
  //     this.last_name = ""
  //     this.birth_date = new Date()
  //     this.fetchProfiles()
  //   })
  //   .catch(error => {
  //     console.log("error");
  //     console.log(error)
  //   })
  // }

}
