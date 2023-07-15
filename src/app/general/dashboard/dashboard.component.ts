import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListModule } from '@taiga-ui/core';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TUI_ARROW } from '@taiga-ui/kit';
import { TuiDropdownModule } from '@taiga-ui/core';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { Subject, finalize, map, takeUntil } from 'rxjs';

interface NavBarItems {
  id: number,
  name: string,
  routerLink: string,
  active: boolean
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, TuiTabsModule, RouterModule,
    TuiButtonModule, ReactiveFormsModule, TuiInputModule,
    TuiSvgModule, TuiDataListModule, TuiDropdownModule,
    TuiHostedDropdownModule, TuiLinkModule, TuiScrollbarModule,
    TuiLoaderModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  onDestry$: Subject<void> = new Subject();
  timm: number;
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  readonly arrow = TUI_ARROW;
  open: boolean;

  constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) { }

  mainItems: NavBarItems[] = [
    {
      id: 1,
      name: "Buttons",
      routerLink: "/dashboard/buttons",
      active: true
    }, {
      id: 2,
      name: "Accordions",
      routerLink: "/dashboard/accordions",
      active: true
    }, {
      id: 3,
      name: "Charts",
      routerLink: "/dashboard/charts",
      active: true
    }, {
      id: 4,
      name: "Avatars",
      routerLink: "/dashboard/avatars",
      active: true
    }, {
      id: 5,
      name: "Badges",
      routerLink: "/dashboard/badges",
      active: true
    }, {
      id: 6,
      name: "Calendars",
      routerLink: "/dashboard/calendars",
      active: true
    }, {
      id: 7,
      name: "Cards",
      routerLink: "/dashboard/cards",
      active: true
    }, {
      id: 8,
      name: "Carousels",
      routerLink: "/dashboard/carousels",
      active: true
    }, {
      id: 9,
      name: "Checkboxes",
      routerLink: "/dashboard/checkboxes",
      active: true
    }, {
      id: 10,
      name: "Dialogs",
      routerLink: "/dashboard/dialogs",
      active: true
    }, {
      id: 11,
      name: "Colorpickers",
      routerLink: "/dashboard/colorpickers",
      active: true
    },
    {
      id: 12,
      name: "Expand",
      routerLink: "/dashboard/expand",
      active: true
    },
    {
      id: 13,
      name: "Islands",
      routerLink: "/dashboard/islands",
      active: true
    },
    {
      id: 14,
      name: "Labels",
      routerLink: "/dashboard/labels",
      active: true
    }, {
      id: 15,
      name: "Loaders",
      routerLink: "/dashboard/loaders",
      active: true
    },
    {
      id: 16,
      name: "Money",
      routerLink: "/dashboard/money",
      active: true
    },
    {
      id: 17,
      name: "Notifications",
      routerLink: "/dashboard/notifications",
      active: true
    },
    {
      id: 17,
      name: "PDF-Viewer",
      routerLink: "/dashboard/pdf-viwer",
      active: true
    },
    {
      id: 18,
      name: "Scrollbars",
      routerLink: "/dashboard/scrollbars",
      active: true
    },
    {
      id: 19,
      name: "Tables",
      routerLink: "/dashboard/tables",
      active: true
    },
    {
      id: 20,
      name: "Lists",
      routerLink: "/dashboard/lists",
      active: true
    },

    {
      id: 21,
      name: "Steppers",
      routerLink: "/dashboard/steppers",
      active: true
    },

    {
      id: 25,
      name: "Login",
      routerLink: "/login",
      active: true
    },
    {
      id: 26,
      name: "Register",
      routerLink: "/register",
      active: true
    },
  ];

  tmpItems: NavBarItems[]

  ngOnInit(): void {

    this.tmpItems = this.mainItems;

    this.searchForm.get("search").valueChanges.pipe(
      map((val) => {
        this.tmpItems = this.mainItems;
        this.tmpItems = this.tmpItems.filter((item) => {
          return item.name.toLowerCase().indexOf(val) != -1
        })
      }),
      takeUntil(this.onDestry$),
    ).subscribe()

  }

  ngAfterViewInit(): void {
    this.open = false;
  }

  ngOnDestroy(): void {
    this.onDestry$.next();
    this.onDestry$.complete();
  }



}
