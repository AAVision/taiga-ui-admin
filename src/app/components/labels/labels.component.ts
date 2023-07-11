import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiHintModule, TuiLabelModule, TuiTooltipModule } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-labels',
  standalone: true,
  imports: [
    CommonModule, TuiLabelModule, TuiHintModule,
    TuiInputModule, ReactiveFormsModule, TuiTooltipModule,
    TuiTextfieldControllerModule, GoToComponent
  ],
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LabelsComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });

  readonly testForm2 = new FormGroup({
    testValue: new FormControl(),
  });
}
