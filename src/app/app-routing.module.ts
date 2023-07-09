import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', loadComponent: () =>
      import('./general/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register', loadComponent: () =>
      import('./general/register/register.component').then((m) => m.RegisterComponent)
  }, {
    path: 'dashboard', loadComponent: () =>
      import('./general/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: 'buttons',
        loadComponent: () => import('./components/button/button.component').then((m) => m.ButtonComponent)
      },
      {
        path: 'accordions',
        loadComponent: () => import('./components/accordion/accordion.component').then((m) => m.AccordionComponent)
      },
      {
        path: 'charts',
        loadComponent: () => import('./components/charts/charts.component').then((m) => m.ChartsComponent)
      },
    ]
  }
];
