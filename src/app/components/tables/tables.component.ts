import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiCheckboxModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule, TuiCheckboxModule, ReactiveFormsModule
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TablesComponent {
  testValue = new FormControl(true);
}
