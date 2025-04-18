import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Tentativo di login con:', this.email, this.password);
    this.errorMessage = '';
    this.loading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        console.log('Login riuscito, redirigo alla dashboard...');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log('Errore login:', err.message);
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
