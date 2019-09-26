import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  private user: User;
  private id: string = "";
  private isAvailable: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  delUser() {
    this.userService.delete(this.id).subscribe((user: User) => {
      this.user = user;
    });
    this.isAvailable = !this.isAvailable;
  }
}
