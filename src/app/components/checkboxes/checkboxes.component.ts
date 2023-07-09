import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule, TuiCheckboxModule } from '@taiga-ui/kit';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiCheckboxBlockModule } from '@taiga-ui/kit';
import { TuiGroupModule, TuiTooltipModule } from '@taiga-ui/core';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [
    CommonModule, TuiCheckboxModule, ReactiveFormsModule,
    TuiCheckboxBlockModule, TuiGroupModule, TuiAvatarModule,
    TuiTooltipModule
  ],
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CheckboxesComponent {
  checkbox = new FormGroup({
    testValue1: new FormControl(true),
    testValue2: new FormControl(false),
    testValue3: new FormControl({ value: true, disabled: true }),
    testValue4: new FormControl({ value: false, disabled: true }),
  });

  checkboxBlock1 = new FormGroup({
    testValue1: new FormControl(false),
    testValue2: new FormControl(false),
    testValue3: new FormControl(false),
  });

  checkboxBlock2 = new FormGroup({
    testValue1: new FormControl(false),
    testValue2: new FormControl(false),
    testValue3: new FormControl(false),
  });

  checkboxBlock3 = new FormGroup({
    testValue1: new FormControl(false),
    testValue2: new FormControl(false),
    testValue3: new FormControl(false),
    testValue4: new FormControl(false),
  });

}
