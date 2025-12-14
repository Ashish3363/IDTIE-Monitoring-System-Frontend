// import { Routes } from '@angular/router';
// import { AdminLogin } from './admin-login/admin-login';
// import { Dashboard } from './dashboard/dashboard';
// import { StudentPortal } from './student-portal/student-portal';
// import { TeacherPortal } from './teacher-portal/teacher-portal';
// import { ViolationPortal } from './violation-portal/violation-portal'; // ✅ import Violation Portal

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: AdminLogin },              // Admin login page
//   { path: 'dashboard', component: Dashboard },          // Dashboard page
//   { path: 'student-portal', component: StudentPortal }, // Student portal page
//   { path: 'teacher-portal', component: TeacherPortal }, // Teacher portal page
//   { path: 'violation-portal', component: ViolationPortal }, // ✅ Violation Portal
//   { path: '**', redirectTo: 'login' },                  // fallback route
// ];

// import { Routes } from '@angular/router';
// import { AdminLogin } from './admin-login/admin-login';
// import { Dashboard } from './dashboard/dashboard';
// import { StudentPortal } from './student-portal/student-portal';
// import { TeacherPortal } from './teacher-portal/teacher-portal';
// import { ViolationPortalComponent } from './violation-portal/violation-portal.component'; // ✅ Correct import

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: AdminLogin },
//   { path: 'dashboard', component: Dashboard },
//   { path: 'student-portal', component: StudentPortal },
//   { path: 'teacher-portal', component: TeacherPortal },
//   { path: 'violation-portal', component: ViolationPortalComponent }, // ✅ Correct component
//   { path: '**', redirectTo: 'login' },
// ];

// import { Routes } from '@angular/router';
// import { AdminLogin } from './admin-login/admin-login';
// import { Dashboard } from './dashboard/dashboard';
// import { StudentPortal } from './student-portal/student-portal';
// import { TeacherPortal } from './teacher-portal/teacher-portal';
// import { ViolationPortal } from './violation-portal/violation-portal'; // ✅ matches your file & class

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: AdminLogin },
//   { path: 'dashboard', component: Dashboard },
//   { path: 'student-portal', component: StudentPortal },
//   { path: 'teacher-portal', component: TeacherPortal },
//   { path: 'violation-portal', component: ViolationPortal }, // ✅ use same class name
//   { path: '**', redirectTo: 'login' },
// ];




import { Routes } from '@angular/router';
import { AdminLogin } from './admin-login/admin-login';
import { Dashboard } from './dashboard/dashboard';
import { StudentPortal } from './student-portal/student-portal';
import { TeacherPortal } from './teacher-portal/teacher-portal';
import { ViolationPortal } from './violation-portal/violation-portal'; // ✅ standalone

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AdminLogin },
  { path: 'dashboard', component: Dashboard },
  { path: 'student-portal', component: StudentPortal },
  { path: 'teacher-portal', component: TeacherPortal },
  { path: 'violation-portal', component: ViolationPortal }, // ✅ correct
  { path: '**', redirectTo: 'login' },
];

