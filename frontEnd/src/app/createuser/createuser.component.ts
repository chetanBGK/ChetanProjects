import { Component } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
  user: User=new User();

constructor(private userService:UserService, private router:Router){}

  submitUser(){
    this.saveUser();
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUser();
    },
  error=>console.log(error));
  }

  goToUser()
  {
    this.router.navigate([`/users`]);
  }
}
