import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8080/allusers";

  addUrl="http://localhost:8080/adduser";

  getById="http://localhost:8080/userbyid";

  update="http://localhost:8080/update";

  deleteUsr="http://localhost:8080/delete";

  constructor(private httpClient:HttpClient) {
   }

  getUsers():Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  createUser(user:User):Observable<Object>
  {
    return this.httpClient.post(`${this.addUrl}`,user);
  }

  getUserById(id:number):Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.getById}/${id}`);
  }

  updateUser(id:number, user:User):Observable<User[]>
  {
    return this.httpClient.put<User[]>(`${this.update}/${id}`,user);
  }

  deleteUser(id:number):Observable<User[]>
  {
    return this.httpClient.delete<User[]>(`${this.deleteUsr}/${id}`);
  }
}
