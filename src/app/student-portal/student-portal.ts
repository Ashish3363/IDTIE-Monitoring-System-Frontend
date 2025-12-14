import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular'; // This provides <lucide-icon>

@Component({
  selector: 'app-student-portal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule], // Required modules
  templateUrl: './student-portal.html',
  styleUrls: ['./student-portal.css'],
})
export class StudentPortal {
  fb = inject(FormBuilder);
  router = inject(Router);

  studentForm: FormGroup;
  isLoading = false;

  // Modified: support multiple files
  selectedFiles: File[] = [];

  constructor() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      rollNumber: ['', Validators.required],
      studentClass: ['', Validators.required],
    });
  }

  handleBack() {
    this.router.navigate(['/dashboard']);
  }

  // Modified: handle multiple file selection
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  async submit() {
    if (this.studentForm.invalid) return;
    this.isLoading = true;

    const formData = new FormData();
    formData.append('student_id', this.studentForm.value.rollNumber); // FastAPI expects student_id
    formData.append('student_name', this.studentForm.value.name);    // FastAPI expects student_name

    // Append files with key "files" (FastAPI expects this)
    if (this.selectedFiles.length) {
      this.selectedFiles.forEach((file) => {
        formData.append('files', file); // "files" matches backend
      });
    }

    try {
      const response = await fetch('http://localhost:8000/upload-student/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || 'Failed to save student information');
      }

      const data = await response.json();
      console.log('Response:', data);
      alert(`Student added successfully! Uploaded ${data.num_images} images.`);

      this.studentForm.reset();
      this.selectedFiles = [];
    } catch (err: any) {
      alert(err.message || 'Error saving student information');
    } finally {
      this.isLoading = false;
    }
  }

  resetForm() {
    this.studentForm.reset();
    this.selectedFiles = [];
  }
}