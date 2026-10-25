import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersApiResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  /** Fetch all user profiles from the Express API. */
  getUsers(): Observable<UsersApiResponse> {
    return this.http.get<UsersApiResponse>(this.apiUrl);
  }
}
