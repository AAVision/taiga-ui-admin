import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [
    CommonModule, GoToComponent
  ],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

}
