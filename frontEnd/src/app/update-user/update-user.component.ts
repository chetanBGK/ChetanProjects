import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:User=new User();
  id:number|any;

  constructor(private userService:UserService,private route:ActivatedRoute,
    private router:Router
  ){}


  ngOnInit(): void {
    this.id=this.route.snapshot.params[`id`];
    this.userService.getUserById(this.id).subscribe((data: any)=>
    {
      console.log(data);
      this.user=data;
    });
  }

  submitUser(){
    this.userService.updateUser(this.id,this.user).subscribe(data=>
      {console.log(data);
        this.router.navigate([`/users`]);
      },
      error=>console.log(error));
  }
}
