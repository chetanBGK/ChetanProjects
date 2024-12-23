import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users:User[]|any;

  ngOnInit(): void {
    this.displayUsers();
  }

  constructor(private userService:UserService, private router:Router){}


  displayUsers()
  {
    this.userService.getUsers().subscribe(data=>
    {
      this.users=data;
    }
    );
  }

  updateUser(id:number)
  {
    this.router.navigate([`/update-user`,id]);
  }

  deleteUser(id:number)
  {
    this.userService.deleteUser(id).subscribe(data=>
    {console.log(data);
      this.displayUsers();
    }
    )
  }
}
