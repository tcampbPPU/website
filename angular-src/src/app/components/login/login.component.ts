import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    // Try to log in the user
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        // AuthService to store user's data in local storage
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in!', {
          cssClass: 'alert-success',
          timeout: 1000
        });
        this.router.navigate(['dashboard']);
      }else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['login']);
      }
    });

  }

}
