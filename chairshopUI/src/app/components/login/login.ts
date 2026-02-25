import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Credentials } from '../../models/credentials'
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: Auth, private router: Router) {  }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    const credentials: Credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.Login(credentials).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);  
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
