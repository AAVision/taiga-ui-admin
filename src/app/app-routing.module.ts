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
      {
        path: 'avatars',
        loadComponent: () => import('./components/avatars/avatars.component').then((m) => m.AvatarsComponent)
      },
      {
        path: 'badges',
        loadComponent: () => import('./components/badges/badges.component').then((m) => m.BadgesComponent)
      },
      {
        path: 'calendars',
        loadComponent: () => import('./components/calendars/calendars.component').then((m) => m.CalendarsComponent)
      },
      {
        path: 'cards',
        loadComponent: () => import('./components/cards/cards.component').then((m) => m.CardsComponent)
      },
      {
        path: 'carousels',
        loadComponent: () => import('./components/carousels/carousels.component').then((m) => m.CarouselsComponent)
      },
      {
        path: 'checkboxes',
        loadComponent: () => import('./components/checkboxes/checkboxes.component').then((m) => m.CheckboxesComponent)
      },
      {
        path: 'colorpickers',
        loadComponent: () => import('./components/colorpickers/colorpickers.component').then((m) => m.ColorpickersComponent)
      },
    ]
  }
];
