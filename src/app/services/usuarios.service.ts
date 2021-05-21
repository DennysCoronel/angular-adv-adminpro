import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _ngZone: NgZone, private http: HttpClient, private router: Router) {

    this.googleInit();
  }

  public auth2: any;

  valodartoken(): Observable<boolean> {

    const token = localStorage.getItem('token') || '';
    console.log(token);



    return this.http.get(`${baseUrl}/login/renew`, { headers: { 'x-token': token } }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(err => of(false))
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${baseUrl}/usuarios`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }


  login(formData: LoginForm) {
    return this.http.post(`${baseUrl}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

  googlelogin(token: any) {

    return this.http.post(`${baseUrl}/login/google`, { token })
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      );
  }

  logFuera() {

    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {

      this._ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });



    });
  }




  googleInit() {

    return new Promise<void>(resolve => {

      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '257826372329-4n7r7b0jschokmjbflnaqqjqmc4a4b8h.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    })
 }
}

