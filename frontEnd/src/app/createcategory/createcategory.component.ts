import { Component } from '@angular/core';
import { Category } from '../classes/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent {

  category:Category=new Category();
  
  constructor(private caregoryService:CategoryService, private router:Router){}
  
  submitCategory()
  {
    this.caregoryService.addCategory(this.category).subscribe(data=>
    {
      console.log(data);
      this.gotoCategory();
    },
    (error)=>{console.log(error);
    }
    )
  }

  gotoCategory()
  {
    this.router.navigate([`/category`]);
  }

}
