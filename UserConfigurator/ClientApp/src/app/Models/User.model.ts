import { Injectable } from '@angular/core';
import { Adapter } from '../Adapters/adapter';


export class User {
  constructor(
    public id: number,
    public surname: string,
    public isAlive: boolean,
    public birthDate: Date,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {

  adapt(item: any): User {
    return new User(
      item.id,
      item.surname,
      item.isAlive,
      new Date(item.birthDate),
    );
  }
}
