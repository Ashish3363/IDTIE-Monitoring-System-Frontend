import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // <-- import HttpClientModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,       // <-- add this
    LucideAngularModule
  ],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLogin {
  username = '';
  password = '';
  // isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  // handleSubmit(event: Event) {
  //   event.preventDefault();
  //   this.isLoading = true;

  //   this.http.post('/api/admin/login', {
  //     username: this.username,
  //     password: this.password,
  //   }).subscribe({
  //     next: (data: any) => {
  //       localStorage.setItem('admin', JSON.stringify(data.admin));
  //       alert('Login Successful! Welcome to the IDTieMonitor dashboard.');
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (err) => {
  //       alert(err.error?.message || 'Invalid username or password');
  //     },
  //     complete: () => {
  //       this.isLoading = false;
  //     }
  //   });
  // }

  
  
  handleSubmit(event: Event) {
    event.preventDefault();

    this.http.get('http://localhost:8000/ping').subscribe(console.log)

    
    console.log({ email: this.username, password: this.password });
    this.http.post<any>('http://localhost:8000/login', {
      email: this.username,   
      password: this.password
    }).subscribe({
      next: (data) => {
        if (data.role === 'admin') {
          localStorage.setItem('admin', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        } else if (data.role === 'teacher') {
          localStorage.setItem('teacher', JSON.stringify(data));
          this.router.navigate(['/violation-portal']);
        } else {
          alert('Unknown role');
        }
      },
      error: (err) => {
        alert(err.error?.detail || 'Invalid email or password');
      }
    });
  }
}
