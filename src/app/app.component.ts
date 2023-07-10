import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
  ]
})
export class AppComponent implements OnInit {
  title = 'taiga-ui-admin';


  constructor() { }

  ngOnInit(): void {
 
  }

}
