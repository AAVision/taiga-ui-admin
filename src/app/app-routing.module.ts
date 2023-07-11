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
        path: '', redirectTo: 'charts', pathMatch: 'full'
      },
      {
        path: 'buttons',
        loadComponent: () => import('./components/buttons/buttons.component').then((m) => m.ButtonComponent)
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
      {
        path: 'dialogs',
        loadComponent: () => import('./components/dialogs/dialogs.component').then((m) => m.DialogsComponent)
      },
      {
        path: 'expand',
        loadComponent: () => import('./components/expand/expand.component').then((m) => m.ExpandComponent)
      },
      {
        path: 'islands',
        loadComponent: () => import('./components/islands/islands.component').then((m) => m.IslandsComponent)
      },
      {
        path: 'labels',
        loadComponent: () => import('./components/labels/labels.component').then((m) => m.LabelsComponent)
      },
      {
        path: 'loaders',
        loadComponent: () => import('./components/loaders/loaders.component').then((m) => m.LoadersComponent)
      },
      {
        path: 'money',
        loadComponent: () => import('./components/money/money.component').then((m) => m.MoneyComponent)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./components/notifications/notifications.component').then((m) => m.NotificationsComponent)
      },
      {
        path: 'pdf-viwer',
        loadComponent: () => import('./components/pdf-viewer/pdf-viewer.component').then((m) => m.PdfViewerComponent)
      },
      {
        path: 'scrollbars',
        loadComponent: () => import('./components/scrollbars/scrollbars.component').then((m) => m.ScrollbarsComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./components/tables/tables.component').then((m) => m.TablesComponent)
      },
      {
        path: 'lists',
        loadComponent: () => import('./components/lists/lists.component').then((m) => m.ListsComponent)
      },
      {
        path: 'steppers',
        loadComponent: () => import('./components/steppers/steppers.component').then((m) => m.SteppersComponent)
      },
    ]
  }
];
