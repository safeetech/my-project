import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/User.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient, @Inject('platformId') private platformId: Object){}
  getUsers(): Observable<User[]>{
       return of([]); // Return an empty array if running in the browser
  }
}

//   getUsers(): Observable<User[]>{
//     if (isPlatformBrowser(this.platformId)) {
//       return of([]); // Return an empty array if running in the browser
//     }
//     return this.http.get<User[]>('/api/users');
//   }
// }
