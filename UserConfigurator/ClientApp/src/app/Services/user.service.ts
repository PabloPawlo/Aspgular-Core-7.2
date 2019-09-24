import { Injectable } from '@angular/core';
import { User, UserAdapter } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  handleError(arg0: string): (err: any, caught: Observable<User>) => import("rxjs").ObservableInput<any> {
    throw new Error("Błąd wczytywania.");
  }

  private apiUrl: string = 'https://localhost:44362/api/users/';


  constructor(private http: HttpClient, private adapter: UserAdapter) { }

  getAll(): Observable<User[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<User[]>(url).pipe(
      catchError(this.handleError));
  }

  getById(id): Observable<User> {
    const url = `${this.apiUrl + id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError));
  }

  post(user: User): Observable<User> {
    const url = `${this.apiUrl}`;
    return this.http.post<User>(url, user).pipe(
      catchError(this.handleError));
  }

  put(user: User): Observable<User> {
    const url = `${this.apiUrl + user.id}`;
    return this.http.put<User>(url, user).pipe(
      catchError(this.handleError));
  }

  delete(user: User): Observable<User> {
    const url = `${this.apiUrl + user.id}`;
    return this.http.delete<User>(url).pipe(
      catchError(this.handleError));
  }
}

