import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiStepperModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-steppers',
  standalone: true,
  imports: [
    CommonModule, TuiStepperModule, GoToComponent
  ],
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SteppersComponent {
  readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];
  readonly steps2 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

}
