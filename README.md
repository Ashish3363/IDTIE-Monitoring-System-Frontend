
# IDTieMonitor Frontend

Angular frontend for **IDTieMonitor** - a real-time monitoring dashboard for detecting and logging ID/tie violations. Provides live monitoring, student management, and violation history with a modern UI built with Tailwind CSS.

🔗 **Backend Repository**: [IDTieMonitor Backend](https://github.com/Ashish3363/IDTIE-Monitoring-System)

## Tech Stack

- **Angular 20** - Modern web framework with signals and standalone components
- **TypeScript 5.8** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling with `@tailwindcss/forms`
- **Lucide Angular** - Beautiful icon set
- **RxJS 7.8** - Reactive programming

## Features

-  **Real-time Dashboard** - Live violation monitoring
-  **Student Management** - Add, edit, and manage student records
- **Photo Upload** - Multi-photo upload for face registration
- **Violation History** - Browse and filter violations with screenshots
-  **Modern UI** - Responsive design with Tailwind CSS


## Prerequisites

```bash
Node.js 18+ (LTS recommended)
npm 9+ or pnpm/yarn
Angular CLI 20
```

Install Angular CLI globally:

```bash
npm install -g @angular/cli@20
```

## Installation

```bash
# Clone the repository
git clone https://github.com/Ashish3363/IDTIE-Monitoring-System-Frontend.git
cd idtiemonitor-frontend

# Install dependencies
npm install
```


## Project Structure

```
idtiemonitor-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.css
│   │   │   ├── students/
│   │   │   │   ├── student-list/
│   │   │   │   ├── student-form/
│   │   │   │   └── student-detail/
│   │   │   ├── violations/
│   │   │   │   ├── violation-list/
│   │   │   │   └── violation-detail/
│   │   │   ├── navbar/
│   │   │   └── sidebar/
│   │   ├── services/
│   │   │   ├── student.service.ts
│   │   │   ├── violation.service.ts
│   │   │   ├── websocket.service.ts
│   │   │   └── api.service.ts
│   │   ├── models/
│   │   │   ├── student.model.ts
│   │   │   └── violation.model.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/
│   │   │   └── http.interceptor.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles.css
│   ├── index.html
│   └── main.ts
├── public/
├── angular.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Development

### Start Development Server

```bash
npm start
# or
ng serve
```

App runs at: **http://localhost:4200**

The app will automatically reload if you change any source files.




Output in `dist/idtiemonitor-frontend/browser/`

### Build Options

```bash
# Production build with optimization
ng build --configuration production

# Build with specific base href
ng build --base-href /app/

# Build and analyze bundle size
ng build --stats-json
npx webpack-bundle-analyzer dist/idtiemonitor-frontend/browser/stats.json
```

