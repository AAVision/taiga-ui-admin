import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-islands',
  standalone: true,
  imports: [
    CommonModule, TuiIslandModule, TuiButtonModule,
    ReactiveFormsModule, TuiLinkModule, GoToComponent
  ],
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class IslandsComponent {

  testForm = new FormGroup({
    testValue: new FormControl(true),
  });

}
