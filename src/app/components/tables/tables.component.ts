import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule, TuiCheckboxModule, ReactiveFormsModule,
    GoToComponent
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TablesComponent {
  testValue = new FormControl(true);
}
