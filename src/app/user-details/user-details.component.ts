import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { 
    this.setStyles(); 
    this.setMyClasses();
  }

  red = 'red';
  isColored = true;
  isClassStyle = true;

  styles = {};
  setStyles(){
    this.styles = {
    'font-style': 'italic',
    'font-size': '14px'
    }
  }

  myClasses:any = {};
  setMyClasses() {
    this.myClasses = {
      'wow':false,
      'amazing':true
    }
  }

  user:User = {
    name: 'usama',
    email: 'us.05.07.91@gmail.com',
    birthDate: Date.parse('1991-07-08'),
    contact: "email",
    phone:"0525382178"
  }

  getSomeString(){
    return 'WOW!';
  }

  calculateAge(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  ngOnInit(): void {
  }

}
