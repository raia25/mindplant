import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSignup() {
    this.http.post('http://localhost:8080/auth/register', {
      name: this.name,
      email: this.email,
      password: this.password
    }, { responseType: 'text' }).subscribe({
      next: () => {
        this.successMessage = 'Registrazione avvenuta con successo!';
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Errore nella registrazione';
        console.error(err);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
