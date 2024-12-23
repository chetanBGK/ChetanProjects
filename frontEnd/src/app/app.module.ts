import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './createcategory/createcategory.component';

import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoryComponent,
    CreateuserComponent,
    CreatecategoryComponent,
    UpdateUserComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
