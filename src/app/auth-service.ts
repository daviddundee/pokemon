import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    let isLoggedin = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedin)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}