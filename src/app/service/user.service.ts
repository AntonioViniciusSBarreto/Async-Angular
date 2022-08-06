import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/31acb9af-3023-4d39-89b0-a52b517737b2';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${this.apiURL}/id/${id}`,
      user,
      this.httpOptions
    );
  }
  readUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`);
  }
}
