import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'; // "User" modelini kullanın
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  path: string = "https://jsonplaceholder.typicode.com/";

  // Kullanıcıları getirmek için fonksiyon
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + "users");
  }

  // Tek bir kullanıcıya ait bilgileri getirmek için opsiyonel fonksiyon
  getUserById(userid: string): Observable<User> {
    let newPath = this.path + "users/" + userid;
    return this.http.get<User>(newPath);
  }
}
