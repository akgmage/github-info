import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user_interface';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  userData: User | null = null;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService
      .getUserDetail()
      .subscribe((data) => (this.userData = data));
  }
}
