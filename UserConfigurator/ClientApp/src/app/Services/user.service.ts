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

  private getAllUrl: string = 'https://localhost:44362/api/users/';
  private getByIdUrl: string = 'https://localhost:44362/api/users/';
  private postUrl: string = '';
  private delUrl: string = '';

  constructor(private http: HttpClient, private adapter: UserAdapter) { }

  getAll(): Observable<User[]> {
    const url = `${this.getAllUrl}`;
    return this.http.get<User[]>(url).pipe(
      catchError(this.handleError));   
  }

  getById(id): Observable<User> {
    const url = `${this.getByIdUrl + id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError));
  }
  
}

