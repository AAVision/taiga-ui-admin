import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

interface NavBarItems {
  id: number,
  name: string,
  routerLink: string,
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, TuiTabsModule, RouterModule,
    TuiButtonModule,
    TuiSvgModule, TuiInputModule, ReactiveFormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardComponent {

  items: NavBarItems[] = [
    {
      id: 1,
      name: "Buttons",
      routerLink: "/dashboard/buttons"
    }, {
      id: 2,
      name: "Accordions",
      routerLink: "/dashboard/accordions"
    }, {
      id: 3,
      name: "Charts",
      routerLink: "/dashboard/charts"
    }, {
      id: 4,
      name: "Avatars",
      routerLink: "/dashboard/avatars"
    }, {
      id: 5,
      name: "Badges",
      routerLink: "/dashboard/badges"
    }, {
      id: 6,
      name: "Calendars",
      routerLink: "/dashboard/calendars"
    }, {
      id: 7,
      name: "Cards",
      routerLink: "/dashboard/cards"
    }, {
      id: 8,
      name: "Carousels",
      routerLink: "/dashboard/carousels"
    }, {
      id: 9,
      name: "Checkboxes",
      routerLink: "/dashboard/checkboxes"
    }, {
      id: 10,
      name: "Dialogs",
      routerLink: "/dashboard/dialogs"
    }, {
      id: 11,
      name: "Colorpickers",
      routerLink: "/dashboard/colorpickers"
    },
    {
      id: 12,
      name: "Expand",
      routerLink: "/dashboard/expand"
    },
    {
      id: 13,
      name: "Islands",
      routerLink: "/dashboard/islands"
    },
    {
      id: 14,
      name: "Labels",
      routerLink: "/dashboard/labels"
    }, {
      id: 15,
      name: "Loaders",
      routerLink: "/dashboard/loaders"
    },
    {
      id: 16,
      name: "Money",
      routerLink: "/dashboard/money"
    },
    {
      id: 17,
      name: "Notifications",
      routerLink: "/dashboard/notifications"
    },
    {
      id: 17,
      name: "PDF-Viewer",
      routerLink: "/dashboard/pdf-viwer"
    },
  ];

}
