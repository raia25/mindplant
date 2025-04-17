import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsers = [
    { email: 'admin', password: '1234' },
    { email: 'user', password: 'abcd' }
  ];

  login(email: string, password: string): Observable<any> {
    const user = this.validUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      console.log('Credenziali valide');
      return of({ message: 'Login success' }).pipe(delay(500));
    } else {
      console.warn('Credenziali NON valide');
      return throwError(() => new Error('Credenziali non valide')).pipe(delay(500));
    }
  }
}
