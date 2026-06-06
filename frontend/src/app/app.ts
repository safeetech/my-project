import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './models/User.model';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private api: ApiService, private cd: ChangeDetectorRef){}
  
  users: any[] = [];
ngOnInit() {
    console.log('App component initialized');
    this.fetchUsers();
    this.cd.detectChanges();
    console.log('App component initialized end');

  } 
  
  fetchUsers() {
    console.log('fetchUsers is called');
    this.api.getUsers().subscribe({ 
      next: data => {
        console.log('data received:', data);
        this.users = data;
        this.cd.detectChanges();
      },
      error: error => {
        console.error('Error fetching users:', error);
      }
    });
  }
  

}