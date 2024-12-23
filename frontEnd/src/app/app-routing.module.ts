import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {path:'users',component:UserComponent},
  {path:'', redirectTo:'users', pathMatch:'full'},
  {path:'category',component:CategoryComponent},
  {path:'createuser', component:CreateuserComponent},
  {path:'createcategory', component:CreatecategoryComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'updateCategory/:id',component:UpdateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
