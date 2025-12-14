import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';



@Component({
  selector: 'app-violation-portal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HttpClientModule],
  templateUrl: './violation-portal.html',
})
export class ViolationPortal implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);

  role: string | null = null;
  
  violationList: any[] = [
  ];

  isLoading = false;

  ngOnInit() {
    const teacherData = localStorage.getItem('teacher');
    const adminData = localStorage.getItem('admin');

    if (teacherData) {
      this.role = 'teacher';
    } else if (adminData) {
      this.role = 'admin';
    }

    this.fetchViolations();
  }

  fetchViolations() {
    //this.isLoading = true;
    this.http.get<any[]>('http://localhost:8000/violations/').subscribe({
      next: (data) => {
        console.log('Fetched violations:', data); 
        this.violationList = data;
        this.cdr.markForCheck(); 
        //this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch violations:', err);
        //this.isLoading = false;
      }
    });
  }

  deleteStudent(student: any) {
    this.http.delete(`http://localhost:8000/violations/${student.studentId}`)
      .subscribe({
        next: () => {
          this.violationList = this.violationList.filter(s => s.studentId !== student.studentId);
          //this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error('Delete failed', err);
          alert('Failed to delete student');
        }
      });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem('teacher');
    this.router.navigate(['/login']);
  }

  expandedImage: string | null = null;

  getImageUrl(imagePath: string): string {
    return `http://localhost:8000/violation_images/${imagePath}`;
  }

  openImageModal(imagePath: string) {
    this.expandedImage = this.getImageUrl(imagePath);
  }

  closeImageModal() {
    this.expandedImage = null;
  }

  setDefaultImage(event: any) {
    event.target.src = 'default.png';  
  }
}