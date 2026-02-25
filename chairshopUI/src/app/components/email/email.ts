import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Email, EmailOptions } from '@yash/email-toolkit';

@Component({
  selector: 'app-email',
  imports: [FormsModule],
  templateUrl: './email.html',
  styleUrls: ['./email.scss'],
})
export class EmailComponent {

  email: EmailOptions = {
    to: '',
    subject: '',
    body: ''
  };
  
  constructor(private emailService: Email, private router: Router) {}

  sendEmail() {
    this.emailService.sendEmail(this.email);
  }
  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
