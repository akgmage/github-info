import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user_interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserDetail() {
    return this.http.get<User>(`https://api.github.com/users/akgmage`);
  }
}
