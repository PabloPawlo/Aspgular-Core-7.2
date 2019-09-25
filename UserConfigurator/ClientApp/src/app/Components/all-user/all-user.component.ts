import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User.model";
import { UserService } from "../../services/User.service";


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: User[] = [];
  private isAvailable: boolean = true;
  constructor(private userService: UserService) {
  }

  getAllUsers()
  {
    this.userService.getAll().subscribe((userList: User[]) =>
    {   
      this.users = userList;
    });
    this.isAvailable = !this.isAvailable;
  }


  ngOnInit() {
  }

}
