import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User.model";
import { UserService } from "../../services/User.service";


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  private isAvailable: boolean = true;
  private id: string = "";
  private user: User;
  constructor(private userService: UserService) { }

  ngOnInit()
  {

  }

  getUser()
  {
    this.userService.getById(this.id).subscribe((user: User) =>
    {
      this.user = user;      
    });
    this.isAvailable = !this.isAvailable;
  }
}
