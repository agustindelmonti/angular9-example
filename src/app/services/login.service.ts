import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../models/user.model';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private url = environment.baseUrl;
    private userSubject$ = new BehaviorSubject(this.getUserFromlocalStorage());

    constructor(
        private http: HttpClient,
    ) { }

    authenticator(email: string, password: string){
        const user = {
            "user": {
                "email": email, 
                "password": password
            }
        };
        
        const UserUrl = `${this.url}/users/login`;

        this.http.post<any>(UserUrl, user).subscribe(response => { 
            localStorage.setItem('user', JSON.stringify(response.user));
            
            this.userSubject$.next(response.user);
        });

    }

    logout() {
        localStorage.removeItem('user')

        this.userSubject$.next(null);
    }

    getUserFromlocalStorage() {
        const userLiteral = JSON.parse(localStorage.getItem('user'));

        return plainToClass(User, userLiteral)
    }

    getUserObservable() {
        return this.userSubject$.asObservable();
    }
}
