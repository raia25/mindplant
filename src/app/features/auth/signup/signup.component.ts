import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Le password non corrispondono.';
      return;
    }

    console.log('Registrazione inviata:', {
      username: this.username,
      email: this.email,
      password: this.password
    });

    // Simulazione successo
    this.successMessage = 'Registrazione completata! Ora puoi accedere.';
    this.errorMessage = '';
    setTimeout(() => this.router.navigate(['/']), 2000);
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
