import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  categories:Category[]|undefined;
  
  constructor(private categoryService:CategoryService,private router:Router){}

  ngOnInit(): void {
    this.displayCategory();
  }

  displayCategory()
  {
    this.categoryService.getCategory().subscribe(data=>
      {this.categories=data}
    );
  }

  goToUpdate(id:number|any)
  {
    this.router.navigate([`updateCategory`,id]);
  }

  deleteCategory(id:number|any){
    this.categoryService.deleteCategory(id).subscribe(data=>
    {console.log(data);
      this.displayCategory();
    }
    )
  }
}



