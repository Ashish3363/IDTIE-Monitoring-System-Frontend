import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, BookOpen, Users, LogOut, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  router = inject(Router);

  // Dummy user info
  user = { name: 'Administrator' };

  // Icons (optional if using <lucide-icon name="..."> in HTML)
  BookOpen = BookOpen;
  Users = Users;
  LogOut = LogOut;
  ArrowRight = ArrowRight;

  handleLogout() {
    localStorage.removeItem('admin');

    this.router.navigate(['/login']);
  }

  navigateToStudentPortal() {
    this.router.navigate(['/student-portal']);
  }

  navigateToTeacherPortal() {
  this.router.navigate(['/teacher-portal']); // ✅ Now goes to Teacher Portal
  }
//   navigateToViolationPortal() {
//   this.router.navigate(['/violation-portal']);
// }
navigateToViolationPortal() {
  this.router.navigate(['/violation-portal']);
}


}

