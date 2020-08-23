import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) { }

  authenticator(email: string, password: string){
    const user = {"user":{"email": email, "password": password}};
    const UserUrl = `${this.url}users/login`;

    this.http.post<any>(UserUrl, user).subscribe(response => { 
      localStorage.setItem('user', JSON.stringify(response.user));
    });
  }
}
