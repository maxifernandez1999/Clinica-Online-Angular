import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.scss']
})
export class RegisterPatientsComponent implements OnInit {

  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsersToRegisterPatients();
    // this.addUser();
  }

  public getUsersToRegisterPatients(): void{
    this.userService.getUsers().subscribe(response => {
      response.forEach(element => {
        console.log(element.payload.doc.data())
        console.log(element.payload.doc.id)
      });
    
    })
  }

  

  public addUser(){
    let user:User = {
      id: '',
      name: 'Pablo',
      lastName: 'fernandez',
      age: 12,
      dni: 4203953,
      email: 'pablo@gmail.com',
      password: 'pablitocapo',
      file : 'xd',
      type : 'patient'
    }
    this.userService.addUser(user).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
  }

}
