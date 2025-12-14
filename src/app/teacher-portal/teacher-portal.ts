import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-teacher-portal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './teacher-portal.html',
})
export class TeacherPortal {
  fb = inject(FormBuilder);
  router = inject(Router);

  // Forms
  registerForm: FormGroup;
  resetForm: FormGroup;

  // States
  // isRegisterLoading = false;
  // isResetLoading = false;
  // resetSuccess = false;

  constructor() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],  // <-- this is the new password
    });

  }

  handleBack() {
    this.router.navigate(['/dashboard']); // ✅ Goes back instead of logout
  }

  async handleTeacherRegister() {
    console.log('teacher reg', this.registerForm.value);

    //if (this.registerForm.invalid) return;
    // this.isRegisterLoading = true;

    const formData = new FormData();
    formData.append('name', this.registerForm.value.name);
    formData.append('email', this.registerForm.value.email);
    formData.append('password', this.registerForm.value.password);

    try {
      console.log('Submitting registration:', this.registerForm.value);

      const response = await fetch('http://localhost:8000/register-teacher/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || 'Registration failed');
      }

      const data = await response.json();
      alert(`Teacher ${data.email} registered successfully!`);
      this.registerForm.reset();

    } catch (err: any) {
      alert(err.message || 'Registration failed');
    } finally {
      // this.isRegisterLoading = false;
    }
  }


  async handlePasswordReset() {
    //if (this.resetForm.invalid) return;
    // this.isResetLoading = true;
    // this.resetSuccess = false;

    const formData = new FormData();
    formData.append('email', this.resetForm.value.email);
    formData.append('new_password', this.resetForm.value.password);

    try {
      const response = await fetch('http://localhost:8000/reset-password/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || 'Reset failed');
      }

      const data = await response.json();
      alert(`Password reset successful for ${data.email}`);
      this.resetForm.reset();
      // this.resetSuccess = true;

      // Reset success flag after 5 seconds
      setTimeout(() => {
        // this.resetSuccess = false;
      }, 5000);

    } catch (err: any) {
      alert(err.message || 'Reset failed');
    } finally {
      // this.isResetLoading = false;
    }
  }

}



