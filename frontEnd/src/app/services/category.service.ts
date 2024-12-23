import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl="http://localhost:8080/getcategory";

  createUrl="http://localhost:8080/createcategory";

  udatecategory="http://localhost:8080/updatecategory";

  getById="http://localhost:8080/getcategorybyid";

  deleteUrl="http://localhost:8080/deletecategory";

  constructor(private httpClient:HttpClient ) { }
  
  getCategory():Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${this.baseUrl}`);
  }
  
  addCategory(category:Category):Observable<Object>
  {
    return this.httpClient.post(`${this.createUrl}`,category);
  }

  getCategoryById(id:number):Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${this.getById}/${id}`)
  }

  updateCategory(id:number,category:Category):Observable<Object>
  {
    return this.httpClient.put(`${this.udatecategory}/${id}`,category);
  }

  deleteCategory(id:number):Observable<Category[]>{
    return this.httpClient.delete<Category[]>(`${this.deleteUrl}/${id}`);
  }
}
