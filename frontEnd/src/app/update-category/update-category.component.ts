import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit{
 
  category:Category=new Category();

  id:number|any;

constructor(private categoryService:CategoryService, private route:ActivatedRoute,
  private router:Router
){}

ngOnInit(): void {
    this.id=this.route.snapshot.params[`id`];
    this.categoryService.getCategoryById(this.id).subscribe((data:any)=>
    {
      this.category=data;
    });
  }


  submitCategory(){
    this.categoryService.updateCategory(this.id,this.category).subscribe(data=>
    {console.log(data);
      this.router.navigate([`/category`])
    })
  }
}
